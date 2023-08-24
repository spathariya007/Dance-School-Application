 import React from 'react'
 import { useNavigate,Link } from 'react-router-dom';
 import './Nav1.css'
 const Nav = () => {
  let navigate =useNavigate()

  let role=localStorage.getItem("role")
  let token=localStorage.getItem("token")

  let logoutHandler=()=>{
    localStorage.removeItem("role")
    localStorage.removeItem("token")
    alert("are you sure, you want to logout")
    navigate("/login")
  }
   return (
     <nav className='navbar'>
      <div className='div_M1'>

        <button><Link to="/"><li>Home</li></Link></button>
        <button><Link to="/about"><li>About</li></Link></button>
        <button><Link to="/contact"> <li>Contact</li></Link></button>
        {role === "ROLE_ADMIN" ? (<Link to="/adminDashBoard"><li>Admin Dashboard</li></Link>
        ) : null}
        {token ? (
          <button><Link to="/login"><li onClick={logoutHandler}>Logout</li></Link></button>):(
          <>
             <button><Link to="/register"><li>Register</li></Link></button>
             <button><Link to="/login"><li>Logout</li></Link></button>
          </>
        )}
      </div>
     </nav>
   )
 }

 export default Nav