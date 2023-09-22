import { useState, useEffect } from 'react';
import { Card, Image, Title, Text, Badge, Group, Modal, Stack, BadgeVariant, UnstyledButton } from '@mantine/core';
import { useHover, useDisclosure } from '@mantine/hooks';
import ReactMarkdown from 'react-markdown';

type GuideData = {
  imgSrc: string;

  name: string;
  file: string;
  flavorText?: string;

  status?: string;
  statusColor?: string;
  statusVariant?: BadgeVariant;

  desc?: string;
  time?: string;

}

const GuideCard = (props: GuideData) => {
  const {hovered, ref} = useHover();
  const [opened, { open, close }] = useDisclosure(false);

  const [text, setText] = useState('')
  useEffect(()=>{
    const path = require("../guides/yubikey.md");
    fetch(path)
      .then(response => {
        return response.text()
      }).then(text => setText(text))
    },[])

  return(
    <>
      <UnstyledButton onClick={open}>
        <Card 
          shadow="sm"
          p="md"
          radius="md"
          withBorder
          style={{maxWidth: 450}}
          >

          <Card.Section>
              <Image
                src={props.imgSrc}
                height={200}
                fit="cover"
                bg="grey"
                //style={{borderColor: "green", borderWidth: 3, borderStyle: "solid"}}
              />
          </Card.Section>

          {/* This group contains the Time to Read and Badge and aligns it to the right */}
          { props.status! && 
              <Group mt="5px" position="apart">
                <Badge color={props.statusColor} variant={props.statusVariant}> {props.status} </Badge>
                <Text>{props.time}</Text>
              </Group>
          }

          {/* This stack holds the Title */}
          <Stack align="left" justify="flex-start" spacing={0}>
            <Title weight={600} order={3} ta="center"> {props.name} </Title>
          </Stack>
          
          {/* This Spoiler contains the description which is
          truncated at a certain length into a collapsible menu */}
          <Text style={{whiteSpace: 'pre-line'}}
            weight={500}
            ta="left"
            //truncate
            //lineClamp={2}
            ref={ref} {... hovered ? {lineClamp: 0, truncate: false} : {lineClamp: 2, truncate: true}}
            >
            {props.desc}
          </Text>
        </Card>
      </UnstyledButton>

      <Modal
        opened={opened}
        onClose={close}
        title="This is a wide modal"
        size="80%"
        //fullScreen
        radius={8}
        transition="fade"
        transitionDuration={200}
        overflow='outside'
        overlayBlur={3}
        >
          {/* Modal content */}
          <ReactMarkdown children={text}/>
          <Group position="right">
            <Image src="/assets/shinx.gif" fit="contain" height={40} width={40}/>
          </Group>
      </Modal>
  </>
  )
}
export default GuideCard;
export type { GuideData };