/**
 * DISABLED — Our Impact page is temporarily hidden.
 * Restore: rename this file back to `page.tsx` (and uncomment the nav/Sudoku entries).
 */
import Container from "@/components/Container";
import SubpageHero from "@/components/SubpageHero";
import { SubpageHeroProps } from "@/lib/type";
import Image from "next/image";

const subpageHeroProps: SubpageHeroProps = {
  title: "Our Impact",
  subtitle: "An Australia where all people are treated with dignity and respect, regardless of their race",
}

const ImpactPage: React.FC = () => {
  return (
    <>
      <SubpageHero {...subpageHeroProps} />
      <Container>
        <section className="flex flex-col gap-16 justify-center items-center py-32">
            <Image src="/images/impact/creating_change.png" alt="THEORY OF CHANGE" width={1000} height={1000} />
        </section>
      </Container>
    </>
  );
};

export default ImpactPage;
