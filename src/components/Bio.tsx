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
} from "@mantine/core";

import { IconSun, IconMoonStars } from "@tabler/icons-react";
import LabeledIcon from "./LabeledIcon";

const useStyles = createStyles((theme, _params, getRef) => ({
  header: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    //color: theme.colorScheme === "dark" ? theme.primaryColor : theme.colors.green
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

export default function BioSection() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { classes } = useStyles();

  return (
    <Stack className={classes.header}>
      <ActionIcon
        variant="outline"
        pos="absolute"
        right={0}
        mr={15}
        mt={15}
        radius="md"
        size="xl"
        color={dark ? "gray.0" : "gray.9"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme">
        {dark ? <IconSun /> : <IconMoonStars />}
      </ActionIcon>
      <Flex
        mih={50}
        gap={{ base: 0, sm: "md" }}
        justify="center"
        align="center"
        direction={{ base: "column", sm: "row" }}
        wrap="nowrap"
        mt="lg"
        mb={5}
        mx={{ base: 20, sm: "7.5%" }}>
        <Box sx={{ maxHeight: 400, maxWidth: 400, paddingBottom: 10 }} px={0}>
          <UnstyledButton
            component="a"
            href="https://github.com/ThatOneCamel"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              mt="xs"
              style={{
                minWidth: 200,
                maxWidth: 300,
                borderColor: "rgba(255, 255, 255, .75)",
                borderWidth: 3,
                borderStyle: "solid",
                borderRadius: "50%",
              }}
              src="/assets/avatar.png"
              radius={300}
              fit="cover"
            />
          </UnstyledButton>
        </Box>

        <Divider size="xs" orientation="vertical" />

        <Flex
          mih={50}
          gap="xs"
          justify={{ base: "center", sm: "flex-start" }}
          direction="column"
          wrap="nowrap"
          mb={30}>
          <Title
            /*color="#F2E2D2"*/
            mb={0}
            order={1}
            size={45}
            weight={800}
            ta={{ base: "center", sm: "left" }}>
            (ThatOne)Camel
          </Title>

          <Title ta={{ base: "center", sm: "left" }} fw={600} order={4} mt={0}>
            I like to break things, but in love with creating
          </Title>

          <Title fw={800} order={2}>
            About Me
          </Title>

          <Stack spacing={2}>
            <Group spacing={5}>
              <LabeledIcon name="Office" icoSize="15px"></LabeledIcon>
              <Text mx={0}>3+ years professional experience</Text>
            </Group>
            <Group spacing={5}>
              <LabeledIcon name="University" icoSize="15px"></LabeledIcon>
              <Text>2016-2020 B.S. in Computer Science</Text>
            </Group>
          </Stack>

          <Text fw={600} mt={0}>
            I'm a Software Engineer by trade, with a current emphasis in data
            engineering and containerized technology. (Kubernetes, Docker,
            OpenShift, etc.)
          </Text>

          <Text fw={600} mt={0}>
            In my free time, I like to make things that make my life easier or
            more entertaining. Occasionally I'm able to make something I think
            others would find useful.
          </Text>

          <Text fw={600} mt={0}>
            Otherwise, I can be found playing video games or drawing. I
            hope this page proves informative or useful
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
}
