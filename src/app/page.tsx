import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Partners from "@/components/Partners";
import Signup from "@/components/Signup";
import Donation from "@/components/Donation";
// Restore later: uncomment to bring the homepage Sudoku grid back
// import Sudoku from "@/components/Sudoku";
import ConferenceBookNowModal from "@/components/temp/ConferenceBookNowModal";
import ConferenceEventDetails from "@/components/temp/ConferenceEventDetails";

const HomePage: React.FC = () => {
  

  return (
    <>
      <ConferenceBookNowModal />
      <Hero />
      <ConferenceEventDetails />
      <Container>
        {/* <Sudoku /> */}

        <Donation />
        <Signup />
      </Container>
      <Partners />
    </>
  );
};

export default HomePage;
