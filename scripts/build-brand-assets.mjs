/**
 * Exporta los assets del símbolo CORE desde el maestro congelado.
 *
 * FUENTE ÚNICA: public/assets/core/symbol/core-symbol-master.svg — la misma
 * geometría D3-C / N0-R0 que components/brand/CoreSymbolDefs.tsx. Nada acá
 * redibuja el símbolo: sólo se cambia el color de relleno y el fondo, y se
 * rasteriza. Si la geometría del maestro cambia, todo esto se regenera; si
 * alguien edita un archivo exportado a mano, la próxima corrida lo pisa.
 *
 * NO incluye el wordmark ni el lockup CORE Group. Ambos se componen en IBM
 * Plex Sans 700, y la única IBM Plex Sans disponible en este repo es la
 * fuente VARIABLE del cache de next/font: fontkit extrae contornos de su
 * instancia por defecto (400) pero falla al pedirle wght 700. Generarlos en
 * 400 sería publicar un logotipo con el peso equivocado. Quedan pendientes
 * hasta tener una IBM Plex Sans Bold estática.
 *
 * Uso:  node scripts/build-brand-assets.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("C:/CORE/node_modules/.pnpm/sharp@0.34.5/node_modules/sharp");

const ROOT = "C:/dev/core-brand-system/public/assets/core";
const MASTER = join(ROOT, "symbol/core-symbol-master.svg");

// Valores de Brand Guidelines § 06. No se inventan acá.
const INK = "#152238";
const PAPER = "#F5F6F8";
const WHITE = "#FFFFFF";

const master = readFileSync(MASTER, "utf8");

/** Reemplaza el relleno del maestro y, opcionalmente, agrega un fondo.
 *  El maestro pinta dos <rect> con el color del símbolo; nada más se toca. */
function variante(fill, bg) {
  let svg = master.replaceAll(`fill="${INK}"`, `fill="${fill}"`);
  if (bg) {
    svg = svg.replace(
      /(<svg[^>]*>)/,
      `$1\n  <rect width="200" height="200" fill="${bg}" />`
    );
  }
  return svg;
}

const dirs = {
  symbol: join(ROOT, "symbol"),
  logo: join(ROOT, "logo"),
  icons: join(ROOT, "icons"),
};
Object.values(dirs).forEach((d) => mkdirSync(d, { recursive: true }));

const hechos = [];
const svg = (nombre, contenido) => {
  writeFileSync(join(dirs.symbol, nombre + ".svg"), contenido, "utf8");
  hechos.push(nombre + ".svg");
};
const png = async (dir, nombre, contenido, size) => {
  const buf = await sharp(Buffer.from(contenido), { density: 384 })
    .resize(size, size)
    .png()
    .toBuffer();
  writeFileSync(join(dir, nombre + ".png"), buf);
  hechos.push(nombre + ".png");
};

const positivo = variante(INK);
const negativo = variante(WHITE);
const mono = variante("currentColor");

// 1 · Masters SVG — positivo, negativo, monocromático.
svg("core-symbol-positive", positivo);
svg("core-symbol-negative", negativo);
svg("core-symbol-mono", mono);

const run = async () => {
  // 2 · PNG del símbolo: transparente, sobre claro y sobre oscuro.
  for (const size of [512, 1024, 2048]) {
    await png(dirs.symbol, `core-symbol-${size}`, positivo, size);
    await png(dirs.symbol, `core-symbol-sobre-claro-${size}`, variante(INK, PAPER), size);
    await png(dirs.symbol, `core-symbol-sobre-oscuro-${size}`, variante(WHITE, INK), size);
  }

  // 3 · Favicon. Las guidelines § 14 validan el símbolo a 16 px sin
  //     adaptación: misma geometría en todas las escalas.
  for (const size of [16, 32, 48, 64, 96, 128, 180, 192, 256, 512]) {
    await png(dirs.icons, `favicon-${size}`, positivo, size);
  }

  // 4 · Ícono de app § 15 — a partir de 32 px, sobre Ink, como muestra el manual.
  for (const size of [32, 48, 64, 128, 256, 512]) {
    await png(dirs.icons, `app-icon-${size}`, variante(WHITE, INK), size);
  }

  console.log(`${hechos.length} archivos generados desde el maestro D3-C`);
  console.log("  SVG   :", hechos.filter((f) => f.endsWith(".svg")).length);
  console.log("  PNG   :", hechos.filter((f) => f.endsWith(".png")).length);
  console.log("  logo/ : 0 — wordmark y lockup pendientes de IBM Plex Sans Bold estática");
};

run();
