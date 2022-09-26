import React from 'react';
import { Avatar, Wrap, WrapItem} from '@chakra-ui/react'
import "./css/ProfileInfo.css";


export function ProfileIcon() {
    return (
        <>
        <Wrap>
            <WrapItem>
                <Avatar name='Dan Abrahmov' />
            </WrapItem>
            
        </Wrap>
        </>
    )
}