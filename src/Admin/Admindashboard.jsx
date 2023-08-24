import React from 'react'
import AdminMainbar from './AdminMainbar'
import AdminSidebar from './AdminSidebar'
import './Admindashboard.css'
// import image from '../Component/images/natraj.webp'

const Admindashboard = () => {
  return (
    <div className='admin-div'>
        
        <AdminSidebar/>
        <AdminMainbar/>
        {/* <img src={image} alt="" /> */}
    </div>
  )
}

export default Admindashboard