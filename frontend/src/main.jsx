import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { TasksProvider } from './context/TasksContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </StrictMode>
)
