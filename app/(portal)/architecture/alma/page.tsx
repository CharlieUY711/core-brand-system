import type { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import EntityPage from "@/components/architecture/EntityPage";
import { entities } from "@/lib/content/entities";

const entity = entities.find((e) => e.slug === "alma")!;

export const metadata: Metadata = { title: entity.name };

export default function Page() {
  return (
    <PageContainer>
      <EntityPage entity={entity} />
    </PageContainer>
  );
}
