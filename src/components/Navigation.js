import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='Nav d-flex flex-row'>
      
       <p><font face="Comic sans MS" size="6">
                            <b className="st">RoomSync</b>
                         </font></p>
      
      <Link to="/">Home</Link>
      <Link to="/accommodation">Accommodation</Link>
     
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/adminlogin">AdminLogin</Link>
      <Link to="/bookform">Room</Link>
      
      
    </div>
  )
}
























// import { Nav, Navbar, NavLink } from "react-bootstrap";
// import React from 'react'
// import { Link } from 'react-router-dom'
// export default function Navigation() {
//   return (
//     <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
//     <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
//     <Navbar.Collapse id="navbarScroll">
// <Nav>
//             <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
//             <NavLink  eventKey="2" as={Link} to="/contact">Contact</NavLink>
//             <NavLink  eventKey="3" as={Link} to="/about">About</NavLink>
//         </Nav>
//     </Navbar.Collapse>    
// </Navbar>
//   )
// }