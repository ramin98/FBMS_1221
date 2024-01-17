import { useContext } from 'react'
import { MyContext } from '../App'

function ComponentFive() {
    let count = useContext(MyContext)
    return (
        <>
            {count}
        </>
    )

}

export default ComponentFive