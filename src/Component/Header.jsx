import React from 'react'
import logo from './images/header-logo.png'
import './Header.css'
import { useNavigate } from 'react-router-dom';



const Header = () => {
  let navigate =useNavigate()
  return (
     <header className='header'>
      <div className='logo' onClick={(e)=>{ e.preventDefault()
                navigate('/')
                             }}>
           <img src={logo} alt="" />
      </div>
      <div className='h-div'>
            <div>
               FACULTY
            </div>
            <div>
                PRO TRANING
            </div>
           <div>
               DANCE CLASSES
            </div>
            <div>
               WORKSHOPS & EVENTS
          </div>
       </div>
     </header>
  )
}

export default Header