import { Card, Image, Title, Text, Badge, Group, Spoiler, Stack, Flex, BadgeVariant, Divider } from '@mantine/core';
import { useHover } from '@mantine/hooks';


type CardData = {
  imgSrc: string;

  name: string;
  flavorText?: string;

  status?: string;
  statusColor?: string;
  statusVariant?: BadgeVariant;

  desc?: string;
  alpha?: JSX.Element;
  beta?: JSX.Element;

}

const ProjectCard = (props: CardData) => {
  const {hovered, ref} = useHover();

  return(
    <Card shadow="sm" p="md" radius="md" withBorder style={{maxWidth: 300}}>
      <Card.Section>
          <Image
            src={props.imgSrc}
            height={200}
            fit="cover"
          />
      </Card.Section>

      {/* This stack holds the Title and the Flavor Text */}
      <Stack align="left" justify="flex-start" spacing={0}>
        <Title mt="md"  weight={600} order={3} ta="left"> {props.name} </Title>
        {props.imgSrc! && 
          <Text fz="sm" ta="left" weight={600} ref={ref} {... hovered ? {lineClamp: 0} : {lineClamp: 1}}>{props.flavorText}</Text>
        }
      </Stack>
      
      {/* This group contains the Badge and aligns it to the right */}
      { props.status! && 
          <Group position="right" mt={2} mb={2}>
            <Badge color={props.statusColor} variant={props.statusVariant}> {props.status} </Badge>
          </Group>
      }

      {/* This Spoiler contains the description which is
        truncated at a certain length into a collapsible menu */}
      <Spoiler maxHeight={55} showLabel="More..." hideLabel="Hide">
        <Text style={{whiteSpace: 'pre-line'}} weight={500} ta="left">{props.desc}</Text>
      </Spoiler>


      <Card.Section>
        <Flex
          direction={{ base: 'column', sm: 'row', 250: "row"}}
          justify="center"
          align="center"
          pt="xs"
        >
          { props.alpha }
          { props.beta! && <Divider size="xs" orientation="vertical" /> }
          { props.beta! && props.beta }
        </Flex>
      </Card.Section>


      </Card>
  )
}
export default ProjectCard;
export type { CardData };