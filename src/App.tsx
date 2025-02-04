import { useRef } from 'react'
import { ButtonNewConversation } from './components/ButtonNewConversation'
import { ChatBar } from './components/ChatBar'
import { ConversationList } from './components/ConversationsList'
import { Dialog } from './components/Dialog'
import './scss/_app.scss'

function App() {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLAnchorElement>(null)

  const handleToggle = () => {
    sidebarRef.current?.classList.toggle('active')
    toggleRef.current?.classList.toggle('active')
  }

  return (
    <div className="main">
      <a role="button" className='main__sidebar--toggle' ref={toggleRef} onClick={handleToggle}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
          <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M5 6L11 12L5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </a>
      <div className='main__sidebar' ref={sidebarRef}>
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
