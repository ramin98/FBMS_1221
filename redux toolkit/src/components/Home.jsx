import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchContent } from "../redux/reducer"
import { fetchAddBagData } from "../redux/getUsersData";
import Spinner from 'react-bootstrap/Spinner';

function Home() {
  let goods = useSelector((state) => state.goods.goods)
  let loading = useSelector((state) => state.goods.isLoading)
  let error = useSelector((state) => state.goods.error)

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContent())
  }, [])

  if (loading) {
    return (
      <div className="admin-modal-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>

    )
  }

  if (error) {
    return (
      <div className="admin-modal-container">

        <h1>ERROR...</h1>
      </div>

    )
  }
  return (
    <div >
      <h1>ALL GOODS</h1>
      <ul className="goods">
        {goods.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.product_name}</p>
              <p>{item.product_description}</p>
              <p>{item.product_price}</p>
              <p>{item.store_name}</p>
              <p>{item.store_address}</p>
              <button onClick={() => dispatch(fetchAddBagData)}>ADD TO BAG</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home
