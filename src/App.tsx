import { Row } from './dataslot-ui/components/base'
import List from './components/chats/list'
import ChatContent from './components/chats/content'
import ChatInfo from './components/chats/info'

function App() {
  return (
    <Row sx={{ width: '100%' }}>
      <List />
      <ChatContent />
      <ChatInfo />
    </Row>
  )
}

export default App
