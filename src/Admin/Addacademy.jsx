import React, { useState } from 'react'
import axiosInstance from '../Helpers/AxiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import './Addacademy.css'

const Addacademy = () => {
  let token=localStorage.getItem("token")
  let navigate=useNavigate()
  let {id}=useParams()
  let [state,setState]=useState({
    academyName:"",
    email:"",
    contact:"",
    description:""
    
  })
  let {academyName,email,contact,description}=state
  let handleData=(e)=>{
let name=e.target.name
let value=e.target.value
setState({...state,[name]:value})
console.log(state);
}

let handleSubmit=async (e)=>{
e.preventDefault()

console.log(state);
try{
  let payload={
    academyName,
    email,
    description,
    contact
  }
  let  finalData=await axiosInstance.post(`/academies/saveacademy/?managerId=${id}`,payload,{headers : {Authorization : `Bearer ${token}`}})
  console.log(finalData);
alert(`successfully registered with ${email} as Academy`)
navigate("/admindashboard/viewAcademy")
  
  }
catch{
  console.log("unable to connect server");
}
}
  return (
    <div className='adacademy-div'>
   <form action="" className='ad-form'>
    <h1>Add Academy</h1>
    <label htmlFor="academyName">Academy Name : </label>
    <input type="text" name="academyName" id="academyName" value={academyName}  onChange={handleData}/><br /><br />
    <label htmlFor="contact">Contact : </label>
    <input type="text" name="contact" id="contact" value={contact} onChange={handleData}/><br /><br />
    <label htmlFor="description">Description : </label>
    <input type="text" name="description" id="description"  value={description} onChange={handleData}></input><br /><br />
    <label htmlFor="email">Email : </label>
    <input type="email" name="email" id="email" value={email} onChange={handleData}/><br /><br />
    <button type="submit" onClick={handleSubmit}>Register</button>
  </form>
  </div>
  )
}

export default Addacademy