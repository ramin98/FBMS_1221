import { useState } from "react"

function Main({setShowModal, array, setArray}) {
  const [value, setValue] = useState('')
  
  return (
    <main>
      <input onChange={(ev) => setValue(ev.target.value)} type="text" />
      <button onClick={() => setArray([...array,{name:value}])}>ADD</button>
        <button onClick={() => setShowModal(true)}>LOGIN</button>
         <ul>
         {array.map((item) => {
          return(
                <li>
                  <p>{item.name}</p>
                  <p>{item.username}</p>
                  <p>{item.email}</p>
                </li>
          )
         })}
         </ul>
    </main>
  )
}

export default Main
