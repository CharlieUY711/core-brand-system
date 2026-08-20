# Símbolo CORE — exportaciones

Generadas por `scripts/build-brand-assets.mjs` desde `core-symbol-master.svg`,
que es la fuente única: la misma geometría D3-C / N0-R0 de
`components/brand/CoreSymbolDefs.tsx`.

Ningún archivo de acá se dibujó a mano. El script sólo cambia el color de
relleno y agrega fondo cuando corresponde, y rasteriza. Si la geometría del
maestro cambia, se regenera todo; si alguien edita un export a mano, la
próxima corrida lo pisa.

| Archivo | Uso |
|---|---|
| `core-symbol-master.svg` | La fuente. No se edita. |
| `core-symbol-positive.svg` | Ink `#152238` — fondos claros |
| `core-symbol-negative.svg` | Blanco — fondos oscuros |
| `core-symbol-mono.svg` | `currentColor` — hereda el color del contexto |
| `core-symbol-{512,1024,2048}.png` | Transparente, para componer |
| `core-symbol-sobre-claro-*.png` | Sobre Paper `#F5F6F8` |
| `core-symbol-sobre-oscuro-*.png` | Sobre Ink `#152238` |

2048 para impresión, 1024 para pantalla.

La geometría está congelada: no se alteran radios, offsets, ángulo ni la
relación núcleo/órbita. Ver Brand Guidelines § 02–03.
