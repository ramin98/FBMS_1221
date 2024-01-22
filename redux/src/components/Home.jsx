import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getData } from "../redux/getUsersData"
function Home() {
  let usersArray = useSelector((state) => state.usersArray)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  },[])
  return (
    <div >
      <h1>ALL GOODS</h1>
       <ul className="goods">
        {usersArray.map((item) => {
          return(
          <li key={item.id}>
            <p>{item.product_name}</p>
            <p>{item.product_description}</p>
            <p>{item.product_price}</p>
            <p>{item.store_name}</p>
            <p>{item.store_address}</p>
          </li>
          )
        })}
       </ul>
    </div>
  )
}

export default Home
