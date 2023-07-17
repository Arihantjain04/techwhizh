import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <div>
      <nav>
        <h1>TechWhizh.</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/contact"}>Contact</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
        </main>
      </nav>
    </div>
  )
}

export default Header
