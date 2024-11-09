import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import { TodoPage } from './pages/TodoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
