import Container from "@/components/Container";
import SubpageHero from "@/components/SubpageHero";
import { Separator } from "@/components/ui/separator";
import { SubpageHeroProps } from "@/lib/type";
import Image from "next/image";

const subpageHeroProps: SubpageHeroProps = {
  title: "Our Impact",
  subtitle: "A world where all people can live, thrive and enjoy life, free from racism.",
}

const ImpactPage: React.FC = () => {
  return (
    <>
      <SubpageHero {...subpageHeroProps} />
      <Container>
        <section className="flex flex-col gap-16 justify-center items-center py-32">
            <Image src="/images/impact/creating_change.png" alt="THEORY OF CHANGE" width={1000} height={1000} />
            <Separator className="w-[70%] bg-[#FD9D3D] h-1"/>
            <p className="font-semibold text-2xl text-center uppercase text-[#35075B]">
            A world where all people can live, thrive and enjoy life, free from racism.
            </p>
        </section>
      </Container>
    </>
  );
};

export default ImpactPage;
