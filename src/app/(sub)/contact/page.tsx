import Container from "@/components/Container";
import SubpageHero from "@/components/SubpageHero";
import ContactList from "./ContactList"
const subpageHeroProps = {
  title: "Contact Us",
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
