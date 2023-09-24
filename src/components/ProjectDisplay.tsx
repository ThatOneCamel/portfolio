import ProjectCard from "./ProjectCard";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandGooglePlay,
  IconDiamonds,
  IconBrowser,
} from "@tabler/icons-react";
import LinkButton from "./LinkButton";
import { iconMap } from "../App";

type ProjectInfo = {
  project: any;
};

const ProjectDisplay = (props: ProjectInfo) => {
  let data = props.project;

  const buttonArr: JSX.Element[] = [];
  for (let i = 0; i < data.buttons.length; i++) {
    var logo: JSX.Element;
    switch (data.buttons[i].text.toUpperCase()) {
      case "GITHUB":
        logo = <IconBrandGithub />;
        break;
      case "TWITTER":
        logo = <IconBrandTwitter />;
        break;
      case "PLAY STORE":
        logo = <IconBrandGooglePlay />;
        break;
      case "MODTHESIMS":
        logo = iconMap.has("TS2Button") ? iconMap.get("TS2Button")! : <IconDiamonds strokeWidth={1.5}/>;
        break;
      case "WEBSITE":
        logo = <IconBrowser />;
        break;
      default:
        logo = <span />;
        break;
    }

    buttonArr.push(
      <LinkButton
        text={data.buttons[i].text}
        link={data.buttons[i].link}
        color={data.buttons[i].color}
        icon={logo}
      />
    );
  }

  return (
    <ProjectCard
      name={data.title}
      flavorText={data.flavorText}
      status={data.badge.status}
      statusColor={data.badge.color}
      statusVariant={data.badge.variant}
      desc={data.description}
      imgSrc={data.image}
      alpha={buttonArr.length > 0 ? buttonArr[0] : undefined}
      beta={buttonArr.length > 1 ? buttonArr[1] : undefined}
      time={data.time}
      tags={data.tags}
    />
  );
};

export default ProjectDisplay;
