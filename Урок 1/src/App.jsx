import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([])
  const [obj, setObj] = useState({
    myName:'Ramin',
    profession:'developer',
    adress:'Baku'
  })

  return (
    <div className='App'>
      <Header array={array} {...obj}/>
      <Main array={array} {...obj}/>
      <Footer array={array} {...obj}/>
      <button onClick={() => setArray([...array,9])}>PLUS</button>
    </div>
  )
}

export default App
