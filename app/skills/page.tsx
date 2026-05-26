import PagePanel from "@/components/layout/PagePanel/PagePanel";
import SkillsPage from "@/components/pages/SkillsPage/SkillsPage";

export const metadata = { title: "Skills — Lucas Haladjian" };

export default function SkillsRoute() {
  return (
    <PagePanel page="skills">
      <SkillsPage />
    </PagePanel>
  );
}
