import { ButtonNewConversation } from './components/ButtonNewConversation'
import { ChatBar } from './components/ChatBar'
import { ConversationList } from './components/ConversationsList'
import { Dialog } from './components/Dialog'
import './scss/_app.scss'

function App() {
  return (
    <div className="app" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '75dvw', height: '50dvh', margin: '12.5dvh auto', border: '1px solid black' }}>
      <div style={{ width: '300px' }}>
        <ButtonNewConversation />
        <ConversationList />
      </div>
      <div style={{ width: 'calc(100% - 300px)' }}>
          <Dialog />
          <ChatBar />
      </div>
    </div>
  )
}

export default App
