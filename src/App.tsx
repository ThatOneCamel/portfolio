import { MantineProvider, ColorSchemeProvider, ColorScheme, createStyles, Tabs, Flex, Center, Container } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { useState } from 'react';

import ProjectDisplay from "./components/ProjectDisplay";
import jsonData from "./dat.json";
import jsonGuideData from "./guides_dat.json";
import BioSection from './components/Bio';
import GuideDisplay from './components/GuideDisplay';

import { ReactComponent as Dalamud } from './components/icons/dalamud.svg';
import { ReactComponent as Plumbob } from './components/icons/plumbob.svg';

import {
  FaBuildingColumns,
  FaCloud,
  FaJava,
  FaRegBuilding
  } from "react-icons/fa6";

import {
  SiAndroid,
  SiAngular,
  SiAdobephotoshop,
  SiApple,
  SiC,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiGit,
  SiGrafana,
  SiGo,
  SiGodotengine,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiLua,
  SiMicrosoftazure,
  SiNodedotjs,
  SiPowershell,
  SiPrometheus,
  SiPython,
  SiReact,
  SiRust,
  SiSketch,
  SiSwift,
  SiTypescript,
  SiUnity,
  SiVisualstudio,
  SiXcode,
  SiYubico,
  } from "react-icons/si";

export const iconMap = new Map<string, JSX.Element>([
  ["Final Fantasy XIV", <Dalamud fill="#F03E3E" width="1.5em" height="1.5em"/>],
  ["The Sims 2", <Plumbob stroke="#40C057" fill="none" width="1.5em" height="1.5em"/>],
  ["TS2Button", <Plumbob stroke="#FFFFFF" fill="none" width="1.5em" height="1.5em"/>],

  ["Java",         <FaJava/>],
  ["Office",       <FaRegBuilding/>],
  ["REST",         <FaCloud/>],
  ["University",   <FaBuildingColumns/>],

  ["Android",      <SiAndroid/>],
  ["Angular",      <SiAngular/>],
  ["Azure",        <SiMicrosoftazure/>],
  ["C",            <SiC/>],
  ["Cpp",          <SiCplusplus/>],
  ["CSharp",       <SiCsharp/>],
  ["CSS",          <SiCss3/>],
  ["Django",       <SiDjango/>],
  ["Docker",       <SiDocker/>],
  ["DotNet",       <SiDotnet size="24"/>],
  ["Firebase",     <SiFirebase/>],
  ["Git",          <SiGit/>],
  ["Go",           <SiGo/>],
  ["Grafana",      <SiGrafana/>],
  ["Godot",        <SiGodotengine/>],
  ["HTML",         <SiHtml5/>],
  ["iOS",          <SiApple/>],
  ["JavaScript",   <SiJavascript/>],
  ["Kubernetes",   <SiKubernetes/>],
  ["Lua",          <SiLua/>],
  ["MacOS",        <SiApple/>],
  ["NodeJS",       <SiNodedotjs/>],
  ["Photoshop",    <SiAdobephotoshop/>],
  ["Powershell",   <SiPowershell/>],
  ["Prometheus",   <SiPrometheus/>],
  ["Python",       <SiPython/>],
  ["React",        <SiReact/>],
  ["React-Native", <SiReact/>],
  ["Rust",         <SiRust/>],
  ["Sketch",       <SiSketch/>],
  ["Swift",        <SiSwift/>],
  ["TypeScript",   <SiTypescript/>],
  ["Unity",        <SiUnity/>],
  ["VisualStudio", <SiVisualstudio/>],
  ["Xcode",        <SiXcode/>],
  ["YubiKey",      <SiYubico/>],
]);

export default function App() {
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
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme}}>
        <BioSection/>
        <Tabs defaultValue="projects" color="green" mt="xs" pb="lg">
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