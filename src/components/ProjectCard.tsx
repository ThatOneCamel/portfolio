import { Card, Image, Title, Text, Badge, Group, Spoiler, Stack, Flex, BadgeVariant, Divider } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { iconMap } from '../App';
import HoverIcon from './HoverIcon';

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
  time?: string;

  tags?: string[];

}

const ProjectCard = (props: CardData) => {
  const {hovered, ref} = useHover();

  var arr: Array<JSX.Element> = []
  props.tags?.forEach((icon) => {
    if(iconMap.has(icon)){
      arr.push(<HoverIcon name={icon} icon={iconMap.get(icon)!}/>)
    };
  });

  return(
    <Card shadow="sm" p="md" radius="sm" withBorder style={{maxWidth: 300}}>
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

      {/* This Group contains the Time and Tag properties */}
      <Group position="apart">
        <Text size="sm" italic>{props.time}</Text>
        <Group spacing="xs">
          {/* For each tag, generate a HoverIcon */}
          {arr}
        </Group>
      </Group>

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