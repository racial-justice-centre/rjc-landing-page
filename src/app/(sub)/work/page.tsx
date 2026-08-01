import SubpageHero from "@/components/SubpageHero";
import { SubpageHeroProps } from "@/lib/type";
import WorkList from "./WorkList";

const subpageHeroProps: SubpageHeroProps = {
  title: "Our Work",
  subtitle: "An Australia where all people are treated with dignity and respect, regardless of their race",
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
