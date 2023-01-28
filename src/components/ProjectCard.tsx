import { Card, Image, Title, Text, Badge, Group, Container, Spoiler, Stack } from '@mantine/core';

type CardData = {
  imgSrc: string;

  name: string;
  flavorText?: string;
  status?: string;
  statusColor?: string;

  desc?: string;
  alpha?: JSX.Element;
  beta?: JSX.Element;

}

const ProjectCard = (props: CardData) => {
  return(
    <Container mt="md" size={350} px={0}>
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
          <Image
          src={props.imgSrc}
          height={250}
          //alt="XIVLauncher"
          //placeholder={<Image src={testImage2} />}
          //withPlaceholder
          />
      </Card.Section>

      {/* This stack holds the Title and the Flavor Text */}
      <Stack align="left" justify="flex-start" spacing={0}>
        <Title mt="md"  weight={600} order={3} ta="left"> {props.name} </Title>
        {props.imgSrc! && 
          <Text fz="sm" ta="left">{props.flavorText}</Text>
        }
      </Stack>
      
      {/* This group contains the Badge and aligns it to the right */}
      { props.status! && 
            <Group position="right" mt="xs" mb={2}>
            <Badge color={props.statusColor} variant="outline"> {props.status} </Badge>
          </Group>
      }

      {/* This Spoiler contains the description which is
        truncated at a certain length into a collapsible menu */}
      <Spoiler maxHeight={120} showLabel="More..." hideLabel="Hide">
        <Text weight={500} ta="left">{props.desc}</Text>
      </Spoiler>

      <Group position="center" mt="md" grow>

        { props.alpha }

        { props.beta! && props.beta }
      </Group>

      </Card>
    </Container>
  )
}
export default ProjectCard;
export type { CardData };