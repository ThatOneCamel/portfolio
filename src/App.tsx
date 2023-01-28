import { MantineProvider } from '@mantine/core';
import ProjectDisplay from "./components/ProjectDisplay";
import jsonData from "./dat.json"


export default function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark'}}>

      <ProjectDisplay project={jsonData.Yubikey}/>
      <ProjectDisplay project={jsonData.GroupLink}/>

    </MantineProvider>
  );
}