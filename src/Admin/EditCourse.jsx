import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Helpers/AxiosInstance'
import { toast } from 'react-toastify'

const EditCourse = () => {
    let navigate=useNavigate()
    let token=localStorage.getItem("token")
    let [course,setCourse]=useState([])
    
    let {id}=useParams()
    let handleData=(e)=>{
      let name=e.target.name
      let value=e.target.value 
      setCourse({...course,[name]:value})
    }
    let handleSubmit=async(e)=>{
      e.preventDefault()
      try{
        let payload=course
        await axiosInstance.put(`/dancecourses/update/${id}`,payload,{headers:{Authorization:`Bearer ${token}`}})
        toast.success("Successfully Updated Course",{position:toast.POSITION.TOP_CENTER})
        navigate("../Admin/ViewCourse")
      }
      catch{
        toast.error("unable to connect server",{position:toast.POSITION.TOP_CENTER})
        console.log("unable to connect server");
      }
    }
    useEffect(()=>{
      let fetchData=async()=>{
        let {data}=await axiosInstance.get(`/dancecourses/get/${id}`,{headers:{Authorization:`Bearer ${token}`}})
      let finalData=data.data
      setCourse(finalData)
      }
      fetchData()
    },[])
  return (
    <div className='adacademy-div'>
        <form action="" className='ad-form'>
        <h1><u>Update Course</u></h1><br />
        <label htmlFor="courseDurationInMonths">Duration - </label>
        <input type="text" name="courseDurationInMonths" id="courseDurationInMonths"
         placeholder='course Duration In Months' value={course.courseDurationInMonths} onChange={handleData}/>
         <br /><br /><br />
         <label htmlFor="fee">Fees - </label>
         <input type="text" name="fee" id="fee" value={course.fee} onChange={handleData}/><br /><br /><br />
         <label htmlFor="type">Dance Form - </label>
         <input type="text" name="type" id="type" value={course.type} onChange={handleData}/><br /><br /><br />
         <button type="submit" onClick={handleSubmit}>Update</button>

      </form>
    </div>
  )
}

export default EditCourse