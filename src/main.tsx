
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './style/index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider >
  </BrowserRouter>
)
