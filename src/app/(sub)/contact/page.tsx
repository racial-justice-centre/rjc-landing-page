import Container from "@/components/Container";
import SubpageHero from "@/components/SubpageHero";
import ContactList from "./ContactList"
const subpageHeroProps = {
  title: "Contact",
  subtitle: "A world where everyone is treated fairly and respectfully, regardless of their race or ethnicity.",
}

const ContactPage: React.FC = () => {
  return (
    <>
      <SubpageHero {...subpageHeroProps} />
      <Container>
        <ContactList />
      </Container>
    </>
  );
};

export default ContactPage;
