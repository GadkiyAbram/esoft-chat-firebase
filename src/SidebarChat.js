import { Avatar } from '@material-ui/core';
import React from 'react';
import { useEffect, useState } from 'react';
import './SidebarChat.css';

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            // do some clever db stuff...
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat
