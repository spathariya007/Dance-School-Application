import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../Helpers/AxiosInstance';



const AddCourse = () => {
  let navigate=useNavigate()
  let token=localStorage.getItem("token")
  let [course,setCourse]=useState({
    courseDurationInMonths:"",
    fee:"",
    type:""
  })
  let {courseDurationInMonths,fee,type}=course
  let {id}=useParams()
  let handleData=(e)=>{
    let name=e.target.name
    let value=e.target.value 
    setCourse({...course,[name]:value})
  }
  let handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      let payload={courseDurationInMonths,fee,type}
      await axiosInstance.post(`/dancecourses/save?branchid=${id}`,payload,{headers:{Authorization:`Bearer ${token}`}})
      toast.success(`Successfully Registered with ${type} course`,{position:toast.POSITION.TOP_CENTER})
      navigate("/admindashboard/viewCourse/")
    }
    catch{
      toast.error("unable to connect server",{position:toast.POSITION.TOP_CENTER})
      console.log("unable to connect server");
    }
  }
  return (
    <div className='adacademy-div'> 
      <form action=""className='ad-form' >
        <h1><u>Add Course</u></h1><br />
        <label htmlFor="courseDurationInMonths">Duration - </label>
        <input type="text" name="courseDurationInMonths" id="courseDurationInMonths"
         placeholder='course Duration In Months' value={courseDurationInMonths} onChange={handleData}/>
         <br /><br /><br />
         <label htmlFor="fee">Fees - </label>
         <input type="text" name="fee" id="fee" value={fee} onChange={handleData}/><br /><br /><br />
         <label htmlFor="type">Dance Form - </label>
         <input type="text" name="type" id="type" value={type} onChange={handleData}/><br /><br /><br />
         <button type="submit" onClick={handleSubmit}>Submit</button>

      </form>
      <ToastContainer/>
    </div>
  )
}

export default AddCourse