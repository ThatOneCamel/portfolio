import { Button } from '@mantine/core';
type ButtonData = {
    text: string
    link: string
    icon: JSX.Element

    color?: string
}
  
const LinkButton = (props: ButtonData)  => {
    return(
            <Button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href={props.link}
                fz="lg"
                color={props.color}
                variant="filled"
                leftIcon={props.icon}
                size="md"
                radius="xs"
                fullWidth
                >
                {props.text}
            </Button>

    )
}

export default LinkButton;