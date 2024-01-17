import { MyContext } from '../App'
import ComponentFive from './ComponentFive'
import { useContext } from 'react'

function ComponentFour() {
    let count = useContext(MyContext)

  return (
    <>
    {count}
      <ComponentFive/>
    </>
  )
}

export default ComponentFour