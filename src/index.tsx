import ReactDOM from 'react-dom/client'
import { ThemeModeProvider } from './contexts/ThemeModeContext'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeModeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeModeProvider>,
)
