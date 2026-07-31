import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Partners from "@/components/Partners";
import Signup from "@/components/Signup";
import Donation from "@/components/Donation";
import Sudoku from "@/components/Sudoku";
import SaveTheDateModal from "@/components/temp/SaveTheDateModal";

const HomePage: React.FC = () => {
  

  return (
    <>
      <SaveTheDateModal />
      <Hero />
      <Container>
        <Sudoku />

        <Donation />
        <Signup />
      </Container>
      <Partners />
    </>
  );
};

export default HomePage;
