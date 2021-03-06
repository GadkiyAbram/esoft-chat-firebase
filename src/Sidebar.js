import { IconButton } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import { MoreVert } from '@material-ui/icons'
import { Chat, DonutLarge } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import db from './firebase';

function Sidebar() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) 
            => setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>
            <div className="sidebar__search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                        <input placeholder="Search or start new chat" 
                        type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                <div>
                {rooms.map((room) => (
                    <SidebarChat key={room.id} id={room.id}
                    name={room.data.name} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
