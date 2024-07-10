import { Row } from '../dataslot-ui/components/base'
import List from '../components/chats/list'
import ChatContent from '../components/chats/content'
import ChatInfo from '../components/chats/info'
import { useEffect } from 'react'
import useWebSocket from 'react-use-websocket'
import { useRecoilState } from 'recoil'
import { lastChatState } from '@/recoils/atoms/chat'

function App() {
  const [lastChat, setLastChat] = useRecoilState(lastChatState);
  const { sendMessage, lastMessage, readyState, lastJsonMessage } = useWebSocket('wss://chat-backend-dev.up.railway.app/ws', {
    onMessage: (event) => {
      const data = JSON.parse(event.data || '{}')
      console.log(data);
      
      if (data?.type !== 'message') return
      setLastChat(prev => {
        const temp = [...prev]
        const findIndex = temp.findIndex(item => item.userId === data.source?.userId)
        if (findIndex === -1) {
          temp.splice(0, 0, { userId: data.source?.userId, name: 'Arsapol', message: data?.message?.text, time: '10:00', tags: ['urgent'], profile: 'https://sprofile.line-scdn.net/0hKv1Zm7b6FFkcIz5Mf_FqJmxzFzM_Uk1LZ0Vcb3wnTW10ElAHNUAOPC0mS2kjR1VfZU1SNikkTW4QMGM_AnXobRsTSm4lFlsGN0Zcuw/preview' })

        } else {
          temp[findIndex] = { userId: data.source?.userId, name: 'Arsapol', message: data?.message?.text, time: '10:00', tags: ['urgent'], profile: 'https://sprofile.line-scdn.net/0hKv1Zm7b6FFkcIz5Mf_FqJmxzFzM_Uk1LZ0Vcb3wnTW10ElAHNUAOPC0mS2kjR1VfZU1SNikkTW4QMGM_AnXobRsTSm4lFlsGN0Zcuw/preview' }
        }
        return temp
      })
    }
  });
  return (
    <Row sx={{ width: '100%' }}>
      <List />
      <ChatContent />
      <ChatInfo />
    </Row>
  )
}

export default App
