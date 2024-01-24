import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Admin from './components/Admin'
import MyBag from './components/MyBag'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/my-bag' element={<MyBag/>}/>
      </Routes>
    </>
  )
}

export default App
