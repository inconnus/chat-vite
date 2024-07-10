import { Column } from '@/dataslot-ui/components/base'
import { useTheme } from '@emotion/react'
import React from 'react'
import ListItem from './item'
import { lastChatState } from '@/recoils/atoms/chat'
import { useRecoilState } from 'recoil'



const List = () => {
    const theme = useTheme()
    const [lastChat] = useRecoilState(lastChatState);
    const onChange = () => {

    }
    return (
        <Column sx={{ width: '340px', minWidth: '300px', flexShrink: 0, overflowY: 'scroll', borderRight: `1px solid ${theme.color.border.primary}` }}>
            {lastChat?.map((item, index) => (
                <ListItem key={item.userId} name={item.name} message={item.message} time={item.time} tags={item.tags} profile={item.profile} />
            ))}
        </Column>
    )
}

export default List