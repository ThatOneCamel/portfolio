import { MantineProvider, ColorSchemeProvider, ColorScheme, createStyles, Tabs, Flex, Center, Container } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { useState } from 'react';

import ProjectDisplay from "./components/ProjectDisplay";
import jsonData from "./dat.json";
import jsonGuideData from "./guides_dat.json";
import BioSection from './components/Bio';
import GuideDisplay from './components/GuideDisplay';

import { ReactComponent as Dalamud } from './components/icons/dalamud.svg';
import { ReactComponent as Plumbob } from './components/icons/plumbob.svg';

import {
  DiAndroid,
  DiApple,
  DiCss3,
  DiGit,
  DiHtml5,
  DiNodejs,
  DiRust,
  DiSwift,
  DiVisualstudio
  } from "react-icons/di";

import {
  FaBuildingColumns,
  FaJava,
  FaRegBuilding
  } from "react-icons/fa6";

import { BiLogoGoLang, BiLogoUnity } from "react-icons/bi";

import {
  IconApi,
  IconBrandCSharp,
  IconBrandCpp,
  IconLetterC
  } from '@tabler/icons-react';

import {
  SiAngular,
  SiAdobephotoshop,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiGrafana,
  SiGodotengine,
  SiJavascript,
  SiKubernetes,
  SiLua,
  SiMicrosoftazure,
  SiPowershell,
  SiPrometheus,
  SiPython,
  SiReact,
  SiSketch,
  SiTypescript,
  SiXcode,
  SiYubico
  } from "react-icons/si";

//let iconMap = new Map<string, IconData>();
//iconMap.set("Angular", {name: "Angular", icon: <HoverIcon name='Angular' icon={<SiAngular/>}/>})

export const iconMap = new Map<string, JSX.Element>([
  ["Final Fantasy XIV", <Dalamud fill="white" width="1.5em" height="1.5em"/>],
  ["The Sims 2", <Plumbob strokeWidth={7} width="1.5em" height="1.5em"/>],

  ["Android",      <DiAndroid/>],
  ["CSS",          <DiCss3/>],
  ["Git",          <DiGit/>],
  ["HTML",         <DiHtml5/>],
  ["iOS",          <DiApple/>],
  ["MacOS",        <DiApple/>],
  ["NodeJS",       <DiNodejs/>],
  ["Rust",         <DiRust/>],
  ["Swift",        <DiSwift/>],
  ["VisualStudio", <DiVisualstudio/>],

  ["Java",         <FaJava/>],
  ["University",   <FaBuildingColumns/>],
  ["Office",       <FaRegBuilding/>],

  ["Go",           <BiLogoGoLang/>],
  ["Unity",        <BiLogoUnity/>],

  ["REST",         <IconApi/>],
  ["Cpp",          <IconBrandCpp/>],
  ["CSharp",       <IconBrandCSharp/>],
  ["C",            <IconLetterC/>],

  ["Angular",      <SiAngular/>],
  ["Photoshop",    <SiAdobephotoshop/>],
  ["Django",       <SiDjango/>],
  ["Docker",       <SiDocker/>],
  ["DotNet",       <SiDotnet size="24"/>],
  ["Firebase",     <SiFirebase/>],
  ["Grafana",      <SiGrafana/>],
  ["Godot",        <SiGodotengine/>],
  ["JavaScript",   <SiJavascript/>],
  ["Kubernetes",   <SiKubernetes/>],
  ["Lua",          <SiLua/>],
  ["Azure",        <SiMicrosoftazure/>],
  ["Powershell",   <SiPowershell/>],
  ["Prometheus",   <SiPrometheus/>],
  ["Python",       <SiPython/>],
  ["React",        <SiReact/>],
  ["React-Native", <SiReact/>],
  ["Sketch",       <SiSketch/>],
  ["TypeScript",   <SiTypescript/>],
  ["Xcode",        <SiXcode/>],
  ["YubiKey",      <SiYubico/>],
]);
const useStyles = createStyles((theme) => ({
  container: {
    height: "auto",
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Static media query
    '@media (max-width: 800px)': {
      backgroundColor: theme.colors.orange[6],
    },
  },

  container2: {
    height: "auto",
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      backgroundColor: theme.colors.green[6],
    },

    // Static media query
    '@media (max-width: 800px)': {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

export default function App() {
  const { classes } = useStyles()

  //builds json information into objects
  var arr: Array<JSX.Element> = []
  for (const [, obj] of Object.entries(jsonData)) {
    arr.push(<ProjectDisplay project={obj}/>)
  }

  var guideArr: Array<JSX.Element> = []
  for (const [, obj] of Object.entries(jsonGuideData)) {
    guideArr.push(<GuideDisplay project={obj}/>)
  }

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme}}>
        <BioSection/>
        <Tabs defaultValue="projects" color="green" mt="xs">
          <Center>
          <Tabs.List grow position="center" w={{sm: "50%", base: "90%"}} mb="sm">
            <Tabs.Tab value='projects'>Projects</Tabs.Tab>
            <Tabs.Tab value='guides'>Guides</Tabs.Tab>
          </Tabs.List>

          </Center>

          <Tabs.Panel value="projects">
            <Flex
              mih={50}
              gap="md"
              justify="center"
              align="flex-start"
              direction="row"
              wrap="wrap"
            >
              {arr}
            </Flex>
          </Tabs.Panel>

          <Tabs.Panel value="guides">
            <Center m="sm">
              This is just as much for myself as it is for anyone else :D
            </Center>
            <Container pb="lg" w="100%">
              <Flex
                mih={50}
                gap="md"
                justify="center"
                align="flex-start"
                direction="row"
                wrap="wrap"
              >
                {guideArr}
              </Flex>
            </Container>
          </Tabs.Panel>
        </Tabs>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}