import { MantineProvider, createStyles, Tabs, Flex, Center } from '@mantine/core';
import ProjectDisplay from "./components/ProjectDisplay";
import jsonData from "./dat.json"
import BioSection from './components/Bio';

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
  
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark'}}>

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
        <Center pb="lg">
          This is empty currently :D
        </Center>
      </Tabs.Panel>
    </Tabs>


    </MantineProvider>
  );
}