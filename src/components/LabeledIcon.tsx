import { Group, Title, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconContext } from "react-icons";
import { iconMap } from "../App";

type IconData = {
  name: string;
  text?: string;
  icoSize?: string;
};

const LabeledIcon = (props: IconData) => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Group>
      <IconContext.Provider
        value={{
          size: props.icoSize || "30px",
          style: { verticalAlign: "center" },
        }}>
        {iconMap.has(props.name) ? iconMap.get(props.name) : <div />}
      </IconContext.Provider>
      {props.text! && (
        <Title order={3} align="start">
          {props.text}
        </Title>
      )}
    </Group>
  );
};

export default LabeledIcon;
