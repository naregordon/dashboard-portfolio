import PagePanel from "@/components/layout/PagePanel/PagePanel";
import ExperiencesPage from "@/components/pages/ExperiencesPage/ExperiencesPage";

export const metadata = { title: "Expériences — Lucas Haladjian" };

export default function ExperiencesRoute() {
  return (
    <PagePanel page="experiences">
      <ExperiencesPage />
    </PagePanel>
  );
}
