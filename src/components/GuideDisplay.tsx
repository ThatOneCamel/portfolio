import { UnstyledButton, Image, Flex, Box, Title, Text, Divider, Center } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
const path = require("../guides/yubikey.md");

export default function GuideDisplay() {
    const [text, setText] = useState('')
    useEffect(()=>{
    fetch(path)
        .then(response => {
        return response.text()
        })
        .then(text => setText(text))
    },[])

    return (
        <ReactMarkdown children={text}/>
    );
}

