import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Helpers/AxiosInstance'

const EditAcademy = () => {
    let[academy,setAcademy]=useState([])
    let token=localStorage.getItem("token")
  let {id}=useParams()
  let navigate=useNavigate()
  
  let handleEdit=async(e)=>{
  e.preventDefault()
  try{
    let payload=academy
  await axiosInstance.put("/academies/update",payload,
  {headers:{Authorization:`Bearer ${token}`}})
  window.location.assign("/admindashboard/EditAcademy/:id")
  alert('Updated Successfully')
  navigate("/ViewAcademy")
  }
  catch{
    console.log("unable to connect server");
  }
  }
  let handleData=(e)=>{
    let name=e.target.name
  let value=e.target.value
  setAcademy({...academy,[name]:value})
  }
    useEffect(()=>{
      let fetch=async()=>{
        let {data}=await axiosInstance.get(`/academies/get/${id}`,
        {headers:{Authorization:`Bearer ${token}`}})
      let fetchedData=data.data
      setAcademy(fetchedData)
      }
      fetch()
    },[])
  return (
    <div className='adacademy-div'> 
         <form action="" className='ad-form'  >
        <h1>Edit Academy</h1>
        <label htmlFor="academyName">Academy Name : </label>
        <input type="text" name="academyName" id="academyName" value={academy.academyName}  onChange={handleData}/><br /><br />
        <label htmlFor="contact">Contact : </label>
        <input type="text" name="contact" id="contact" value={academy.contact} onChange={handleData}/><br /><br />
        <label htmlFor="description">Description : </label>
        <input type="text" name="description" id="description"  value={academy.description} onChange={handleData}></input><br /><br />
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" value={academy.email} onChange={handleData}/><br /><br />
        <button type="submit" onClick={handleEdit}>Register</button>
      </form>
    </div>
  )
}

export default EditAcademy