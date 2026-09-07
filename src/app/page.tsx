import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Partners from "@/components/Partners";
import Signup from "@/components/Signup";
import Donation from "@/components/Donation";
import DonateNowModal from "@/components/DonateNowModal";
import Sudoku from "@/components/Sudoku";

const HomePage: React.FC = () => {


  return (
    <>
      <DonateNowModal />
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
