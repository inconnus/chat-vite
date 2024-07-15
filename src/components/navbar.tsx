import { Column, Icon, IconButton, Image } from '@/dataslot-ui/components/base'
import { useTheme } from '@emotion/react'
import React from 'react'
import { Link, useLocation, NavLink, useParams } from "react-router-dom";


const IconLink = ({ icon, href, label }: { icon: string, href: string, label: string }) => {
    const theme = useTheme()
    return (
        <NavLink aria-label={label} to={href}>
            {({ isActive }) => (
                <Icon sx={{ color: isActive ? '#FFF' : '#999', fontSize: '24px', padding: '10px', cursor: 'pointer' }} icon={icon} />
            )}

        </NavLink >
    )
}

const Navbar = () => {
    const { mid } = useParams();
    const theme = useTheme()
    return (
        <Column sx={{ width: '50px', padding: '10px', backgroundColor: theme.color.background.primary, alignItems: 'center' }} as={'nav'}>
            <Image  src={`https://profile.line-scdn.net/0hxGy1WQe_J2hESAyhw29YP3gNKQUzZiEgPCs6C2YcLQw-f2k5fy46DWhKLF45fmc5eS1qW2MfeAxg`} sx={{ width: '35px', marginBottom: '5px', height: '35px', borderRadius: '50%', border: '1.5px solid #FFF' }} alt='logo' width={50} height={50} />
            <IconLink icon='fa-solid fa-comment-dots' href={`/${mid}/chats`} label='chats' />
            <IconLink icon='fa-solid fa-file-spreadsheet' href={`/${mid}/sheets`} label='sheets' />
        </Column>
    )
}

export default Navbar