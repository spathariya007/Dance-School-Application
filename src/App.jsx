 import React from 'react'
 import Nav1 from './Component/Nav1.jsx';
 import Header from './Component/Header.jsx';
 import Home from './Component/Home.jsx';
 import Contact from './Component/Contact.jsx';
 import Register from './Component/Register.jsx';
import Login from './Component/Login.jsx';
import About from './Component/About.jsx'
 import Error from './Component/Error.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminRegister from './Admin/AdminRegister.jsx';
import ProtectedRoute from './Component/serviceRoutes/ProtectedRoute.jsx';
import PublicRouter from './Component/serviceRoutes/PublicRoute.jsx';
import Admindashboard from './Admin/Admindashboard';
import AddAcademyManager from './Admin/AddAcademyManager.jsx';
import ViewAcademy from './Admin/ViewAcademy.jsx';
import ViewBranch from './Admin/ViewBranch.jsx';
import ViewCourse from './Admin/ViewCourse.jsx';
import ViewManager from './Admin/ViewManagers.jsx';
import ManagerDetails from './Admin/ManagerDetails';
import Addacademy from './Admin/Addacademy.jsx';
import AddManager from './Admin/AddManager.jsx';
import AddCourse from './Admin/AddCourse.jsx';
import AddBranch from './Admin/AddBranch.jsx';   
import EditAcademy from './Admin/EditAcademy.jsx';
import EditCourse from './Admin/EditCourse.jsx';
import UpdateBranch from './Admin/UpdateBranch.jsx';
import UpdateManager from './Admin/UpdateManager.jsx';
import UpdateCourse from './Admin/UpdateCourse.jsx';


 
 const App = () => {
   return (
    <Router>
    <Nav1 />
    <Header/>
    <Routes>
        <Route path = "/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path = "/contact" element={<PublicRouter><Contact/></PublicRouter>}/>
        <Route path = "/register" element={<PublicRouter><Register/></PublicRouter>}/>
        <Route path = "/login" element={<PublicRouter><Login/></PublicRouter>}/>
       <Route path = "/about" element={<PublicRouter><About/></PublicRouter>}/>
       <Route path = "/adminregister" element={<AdminRegister/>}/>
       <Route path = "/admindashboard" element={<Admindashboard/>}>
        <Route path='/admindashboard/addAcademyManager' element={<ProtectedRoute><AddAcademyManager/></ProtectedRoute>}/>
        <Route path='/admindashboard/addAcademy/:id' element={<ProtectedRoute><Addacademy/></ProtectedRoute>}/>
        <Route path='/admindashboard/viewAcademy' element={<ProtectedRoute><ViewAcademy/></ProtectedRoute>}/>
        <Route path='/admindashboard/viewAcademyManager' element={<ProtectedRoute><ViewManager/></ProtectedRoute>}/>
        <Route path='/admindashboard/viewBranch' element={<ProtectedRoute><ViewBranch/></ProtectedRoute>}/>
        <Route path='/admindashboard/viewCourse/' element={<ProtectedRoute><ViewCourse/></ProtectedRoute>}/>
        <Route path='/admindashboard/Managerdetails/:id' element={<ProtectedRoute><ManagerDetails/></ProtectedRoute>}/>
        <Route path='/admindashboard/AddManager/:id' element={<ProtectedRoute><AddManager/></ProtectedRoute>}/>
        <Route path='/admindashboard/AddCourse/:id' element={<ProtectedRoute><AddCourse/></ProtectedRoute>}/>
        <Route path='/admindashboard/AddBranch/:id' element={<ProtectedRoute><AddBranch/></ProtectedRoute>}/>
        <Route path='/admindashboard/EditAcademy/:id' element={<ProtectedRoute><EditAcademy/></ProtectedRoute>}/>
        <Route path='/admindashboard/UpdateCourse/:id' element={<ProtectedRoute><UpdateCourse/></ProtectedRoute>}/>
        <Route path='/admindashboard/UpdateBranch/:id' element={<ProtectedRoute><UpdateBranch/></ProtectedRoute>}/>
        <Route path='/admindashboard/UpdateManager/:id' element={<ProtectedRoute><UpdateManager/></ProtectedRoute>}/>








        </Route>
      <Route path = "*" element={<Error/>}/>
    </Routes>
  </Router>
   )
 }

 export default App