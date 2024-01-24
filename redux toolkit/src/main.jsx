import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import applicationStore from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={applicationStore}>
    <App />

    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
