import React from 'react';
import { VStack, StackDivider, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export function ProfileTabHome() {


    return (
        <>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
            >
                <Link to="/BasicCard">
                    <Box h='40px' bg='yellow.200'>
                        Basic
                    </Box>
                </Link>
                <Box h='40px' bg='tomato'>
                    Like
                </Box>
                <Box h='40px' bg='pink.100'>
                    Values
                </Box>
                <Box h='40px' bg='green.100'>
                    Activity
                </Box>
            </VStack>
        </>
    )
}