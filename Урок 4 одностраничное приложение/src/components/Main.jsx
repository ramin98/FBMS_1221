import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Career from "./Career"
import Contacts from "./Contacts"
import User from "./User"

function Main({array}) {
  const [obj, setObj] = useState({})
  
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home setObj={setObj} array={array}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/user/:userId" element={<User array={array} obj={obj}/>}/>
      </Routes>
    </main>
  )
}

export default Main
