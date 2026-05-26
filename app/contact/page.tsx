import PagePanel from "@/components/layout/PagePanel/PagePanel";
import ContactPage from "@/components/pages/ContactPage/ContactPage";

export const metadata = { title: "Contact — Lucas Haladjian" };

export default function ContactRoute() {
  return (
    <PagePanel page="contact">
      <ContactPage />
    </PagePanel>
  );
}
