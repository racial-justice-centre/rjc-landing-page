import SubpageHero from "@/components/SubpageHero";
import { SubpageHeroProps } from "@/lib/type";
import WorkList from "./WorkList";

const subpageHeroProps: SubpageHeroProps = {
  title: "Our Work",
  subtitle: "A world where all people can live, thrive and enjoy life, free from racism.",
}

const WorkPage: React.FC = () => {
  return (
    <>
      <SubpageHero {...subpageHeroProps} />
      <WorkList />
    </>
  );
};

export default WorkPage;
