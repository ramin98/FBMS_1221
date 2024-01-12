import { useRef } from "react"

function Main({obj,myName,profession,adress,setMyName,setProfession,setAdress}) {
  let myNameValue = useRef(null)
  let professionValue = useRef(null)
  let adressValue = useRef(null)
  console.log(myNameValue)
  
  const sendInfo = () => {
    myNameValue.current.innerText = myName
    professionValue.current.innerText = profession
    adressValue.current.innerText = adress
  }

  return (
    <main>
       <input type="text" onChange={(ev) => setMyName(ev.target.value)}/>
       <input type="text" onChange={(ev) => setProfession(ev.target.value)}/>
       <input type="text" onChange={(ev) => setAdress(ev.target.value)}/>
       <button onClick={sendInfo}>SEND</button>
       <p ref={myNameValue}></p>
       <p ref={professionValue}></p>
       <p ref={adressValue}></p>
    </main>
  )
}

export default Main
