import { ButtonNewConversation } from './components/ButtonNewConversation'
import { ChatBar } from './components/ChatBar'
import { ConversationList } from './components/ConversationsList'
import { Dialog } from './components/Dialog'
import './scss/_app.scss'

function App() {
  return (
    <div className="main">
      <div className='main__sidebar'>
        <ConversationList />
      </div>
      <div className='main__dialog'>
          <Dialog />
          <div className='main__actions'>
            <ButtonNewConversation />
            <ChatBar />
          </div>
      </div>
    </div>
  )
}

export default App
