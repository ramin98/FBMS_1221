import { Link, NavLink, useNavigate, useLocation } from "react-router-dom"

function Header() {
  let navigate = useNavigate()
  let path = useLocation();
  console.log(path);
    return (
      <header>
        <h1>HEADER</h1>
        <p>{path.pathname}</p>
        <nav>
          <ul>
            <li><NavLink activeclassname='active' to='/'>Home</NavLink></li>
            <li><NavLink activeclassname='active' to='/about'>About</NavLink></li>
            <li><NavLink activeclassname='active' to='/career'>Career</NavLink></li>
            <li><NavLink activeclassname='active' to='/contacts'>Contacts</NavLink></li>
            <li><button onClick={() => navigate('/contacts')}>Conctacts with button</button></li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Header