import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [myName, setMyName] = useState('')
  const [profession, setProfession] = useState('')
  const [adress, setAdress] = useState('')

  const [obj, setObj] = useState({
    myName: '',
    profession: '',
    adress: ''
  })

  return (
    <div className='App'>
      <Header />
      <Main {...obj} 
      myName={myName} 
      profession={profession} 
      adress={adress} 
      setMyName={setMyName}
      setProfession={setProfession}
      setAdress={setAdress}
      />
      <Footer />
      <button onClick={() => setArray([...array, 9])}>PLUS</button>
    </div>
  )
}

export default App
