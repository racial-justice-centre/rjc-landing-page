import Container from "@/components/Container";
import SubpageHero from "@/components/SubpageHero";
import { SubpageHeroProps } from "@/lib/type";
import EducationList from "./EducationList";

const subpageHeroProps: SubpageHeroProps = {
  title: "Education",
  subtitle: "A world where racial justice and equity are the norm, not the exception.",
}

const EducationPage: React.FC = () => {
  return (
    <>
      <SubpageHero {...subpageHeroProps} />
      <Container>
        <EducationList />
      </Container>
    </>
  );
};

export default EducationPage;
