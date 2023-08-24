import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'


const AdminSidebar = () => {
  return (
    <>
      <div className='sidebar-div'>
        <ul className='sidebar-ul'>
          <h2>Admin DashBoard</h2>
          <li className='sidebar-li'>
            <Link to="/admindashboard/addAcademyManager">
              Add Academy Manager
            </Link>
          </li>
          <li className='sidebar-li'>
            <Link to="/admindashboard/viewAcademyManager">
              View Academy Manager
            </Link>
          </li>
          <li className='sidebar-li'>
            <Link to="/admindashboard/viewAcademy">View Academy</Link>
          </li>
          <li className='sidebar-li'>
            <Link to="/admindashboard/viewBranch">View Branch</Link>
          </li>
          <li className='sidebar-li'>
            <Link to="/admindashboard/viewCourse">View Course</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AdminSidebar