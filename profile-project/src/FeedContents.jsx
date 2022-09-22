import React from 'react';
import { Box } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

export function FeedContents() {

    const navigate = useNavigate()
    const NewFeedContents = () => navigate("/CollectFeedback")

    return (
        <>
        
            <Box bg='white' w='100%' p={4} color='black' mb={5}>
                私の長所ってなんですか？
            </Box>
            <Box bg='white' w='100%' p={4} color='black' mb={5}>
                This is the Box
            </Box>
            <Box bg='white' w='100%' p={4} color='black' mb={5}>
                This is the Box
            </Box>
            <Box bg='white' w='100%' p={4} color='black' mb={5}>
                This is the Box
            </Box>
            <Box bg='white' w='100%' p={4} color='black' mb={5}>
                This is the Box
            </Box>
            <button onClick={NewFeedContents}>+</button>

        </>

    );
}