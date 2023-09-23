import { Box, Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconContext } from "react-icons";

type IconData = {
  name: string;
  icon: JSX.Element;
};

const HoverIcon = (props: IconData) => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Popover
      width={150}
      position="bottom"
      withArrow
      arrowPosition="side"
      shadow="md"
      opened={opened}>
      <Popover.Target>
        <Box onMouseEnter={open} onMouseLeave={close}>
          <IconContext.Provider value={{ color: "white" }}>
            {props.icon}
          </IconContext.Provider>
        </Box>
      </Popover.Target>

      <Popover.Dropdown style={{ pointerEvents: "none" }}>
        <Text align="center" size="sm">
          {props.name}
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
};
export type { IconData };
export default HoverIcon;
