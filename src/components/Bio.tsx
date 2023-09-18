import { UnstyledButton, Image, Flex, Box, Title, Text, Divider, Center } from '@mantine/core';
import { IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';

export default function BioSection() {
    return (
        <Center bg="dark">
            <Flex
                mih={50}
                gap={{ base: 0, sm: "md" }}
                justify="center"
                align="center"
                direction={{ base: 'column', sm: 'row' }}
                wrap="nowrap"
                mt="lg"
                mb={5}
                mx={20}
            >
                <Box sx={{maxHeight: 400, maxWidth: 400, paddingBottom: 10}} px={0}>
                    <UnstyledButton component='a' href="https://github.com/ThatOneCamel" target="_blank" rel="noopener noreferrer">
                        <Image mt="xs" style={{minWidth:200, maxWidth: 300, borderColor: "white", borderWidth: 3, borderStyle: "solid", borderRadius: "50%"}} src="/assets/avatar.png" radius={300} fit="cover"/>
                    </UnstyledButton>
                </Box>
                <Divider size="xs" orientation="vertical" />
                <Flex
                        mih={50}
                        gap="xs"
                        justify={{ base: 'center', sm: 'flex-start' }}
                        direction="column"
                        wrap="nowrap"
                        mb={30}
                    >
                        <Title mb={0} order={1} size={45} weight={700} ta={{ base: "center", sm: "left"}}>Camel</Title>
                        <Text mt={0}>I tell computers to do stuff and break things along the way</Text>
                        <Text mt={0}>I like to think make things that make my life easier and/or more entertaining </Text>
                        <Text mt={0}>
                            I'm a Computer Science graduate that's been in the workforce since the pandemic hit.
                            I'm a backend engineer with a current emphasis in containerized technology.
                            (Kubernetes, Docker, OpenShift, etc.)
                        </Text>
                        <Text mt={0}>For better or worse, I'm here and thanks for visiting my page. I hope it proves informative, if not useful</Text>
                </Flex>
            </Flex>
        </Center>

    );
}

