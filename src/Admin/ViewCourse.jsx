import { faker } from '@faker-js/faker'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../Helpers/AxiosInstance'
import { toast } from 'react-toastify'

const ViewCourse = () => {
  let navigate=useNavigate()
  let image=(faker.image.city())
  let token=localStorage.getItem("token")
  
  let[course,setCourse]=useState([])
  let handleDelete=async(id)=>{
  await axiosInstance.delete(`/dancecourses/delete/${id}`,
    {headers:{Authorization:`Bearer ${token}`}})
    window.location.assign("/admindashboard/viewCourse/")
    toast.success(`Successfully Deleted with ${course.type} course`,{position:toast.POSITION.TOP_CENTER})
   }
  useEffect(()=>{
    let fetchData=async()=>{
      let {data}=await axiosInstance.get("/dancecourses/getall",
      {headers:{Authorization:`Bearer ${token}`}})
      let finalData=data.data
  setCourse(finalData)
   }
   fetchData()
  },[])
  return (
    <div> 
       {course.map((x)=>{
        return(
          <div  >
            <div><img src={image} alt="" /></div>
            <div >
              <h1>{`Course Name - ${x.type}`}</h1>
              <p>{`Course Duration - ${x.courseDurationInMonths}`}</p>
              <p>{`Course Fees - ${x.fee}`}</p>
            </div>
            <div>
              <button onClick={(e)=>{
                e.preventDefault()
                navigate(`/admindashboard/UpdateCourse/${x.id}`)
              }}>Edit</button>
              <button 
              onClick={()=>{
                handleDelete(x.id)
              }}
              >Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ViewCourse