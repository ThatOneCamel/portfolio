import {
  createStyles,
  ActionIcon,
  useMantineColorScheme,
  UnstyledButton,
  Image,
  Flex,
  Box,
  Title,
  Text,
  Divider,
  Group,
  Stack,
  Container,
} from "@mantine/core";

import LabeledIcon from "./LabeledIcon";

const useStyles = createStyles((theme, _params, getRef) => ({
  header: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : "white",
    //color: theme.colorScheme === "dark" ? theme.primaryColor : theme.colors.green
  },

  title: {
    color: theme.colors.green,
  },

  exp: {
    ta: { base: "center", sm: "left" },
    ml: 20,
    columnGap: "10%",
    rowGap: 20,
  },

  icons: {
    borderColor: "rgba(255, 255, 255, .75)",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: "8px",
  },
}));

export default function ExperienceSection() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes } = useStyles();

  return (
    <Box className={classes.header} /*bg="dark"*/>
      <Box w="100%" py={20}>
        <Stack mx={{ base: 5, sm: "10%" }}>
          <Title fw={900} ta={{ base: "center", sm: "left" }} order={2}>
            Professional Experience
          </Title>
          <Title
            fw={500}
            ta={{ base: "center", sm: "left" }}
            underline
            order={2}>
            Languages
          </Title>
          <Flex
            className={classes.exp}
            align={{ base: "center", sm: "flex-start" }}
            justify={{ base: "center", sm: "flex-start" }}
            wrap="wrap"
            pb={5}>
            <LabeledIcon name="Cpp" text="C&#43;&#43;" />
            <LabeledIcon name="Java" text="Java" />
            <LabeledIcon name="C" text="Language" />
            <LabeledIcon name="Go" text="Golang" />
            <LabeledIcon name="Python" text="Python" />
          </Flex>
          <Title
            fw={500}
            ta={{ base: "center", sm: "left" }}
            underline
            order={2}>
            Technologies
          </Title>
          <Flex
            className={classes.exp}
            align={{ base: "center", sm: "space-between" }}
            justify={{ base: "center", sm: "flex-start" }}
            wrap="wrap">
            <LabeledIcon name="Docker" text="Docker" />
            <LabeledIcon name="Kubernetes" text="Kubernetes" />
            <LabeledIcon name="Prometheus" text="Prometheus" />
            <LabeledIcon name="Grafana" text="Grafana" />
          </Flex>
        </Stack>
      </Box>

      <Divider w="90%" mx="5%"></Divider>

      <Box bg={dark ? "#504C97" : "white"} w="100%" py={20}>
        <Stack mx={{ base: 5, sm: "10%" }}>
          <Title fw={900} ta={{ base: "center", sm: "left" }} order={2}>
            Proficient With
          </Title>
          <Title
            fw={500}
            ta={{ base: "center", sm: "left" }}
            underline
            order={2}>
            Languages
          </Title>
          <Flex
            className={classes.exp}
            align={{ base: "center", sm: "flex-start" }}
            justify={{ base: "center", sm: "flex-start" }}
            wrap="wrap"
            pb={5}>
            <LabeledIcon name="CSharp" text="C-Sharp" />
            <LabeledIcon name="JavaScript" text="JavaScript" />
            <LabeledIcon name="TypeScript" text="TypeScript" />
          </Flex>
          <Title
            fw={500}
            ta={{ base: "center", sm: "left" }}
            underline
            order={2}>
            Technologies
          </Title>
          <Flex
            className={classes.exp}
            align={{ base: "center", sm: "space-between" }}
            justify={{ base: "center", sm: "flex-start" }}
            wrap="wrap">
            <LabeledIcon name="React" text="React" />
            <LabeledIcon name="Angular" text="Angular" />
            <Title order={3} align="start">
              .NET
            </Title>
            <LabeledIcon name="Android" text="Android SDK" />
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}
