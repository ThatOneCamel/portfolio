import { Button, Group } from '@mantine/core';
type ButtonData = {
    text: string
    link: string
    icon: JSX.Element

    color?: string
}
  
const LinkButton = (props: ButtonData)  => {
    return(
        <Group position="center" mt="md" mb="xs" grow>
            <Button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href={props.link}
                fz="lg"
                color={props.color}
                leftIcon={props.icon}
                >
                {props.text}
            </Button>

    </Group>

    )
}

export default LinkButton;