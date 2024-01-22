import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addData } from "../redux/getUsersData"

function Admin() {
  let [name, setName] = useState('')
  let [description, setDescription] = useState('')
  let [price, setPrice] = useState('')
  let [storeName, setStoreName] = useState('')
  let [storeAdress, setStoreAdress] = useState('')

  let dispatch = useDispatch()
  let usersArray = useSelector((state) => state.usersArray)

  return (
    <div>
      <h1>ADMIN</h1>
      <input onChange={(ev) => setName(ev.target.value)} type="text" />
      <input onChange={(ev) => setDescription(ev.target.value)} type="text" />
      <input onChange={(ev) => setPrice(ev.target.value)} type="text" />
      <input onChange={(ev) => setStoreName(ev.target.value)} type="text" />
      <input onChange={(ev) => setStoreAdress(ev.target.value)} type="text" />
      <button onClick={() => {
        dispatch(addData({
          product_name: name,
          product_description: description,
          product_price: price,
          store_name: storeName,
          store_address: storeAdress,
        }))
        console.log(usersArray)
      }}>ADD</button>
    </div>
  )
}

export default Admin
