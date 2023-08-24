import React, { useEffect, useState } from 'react'
 import { useNavigate } from 'react-router-dom'
import axiosInstance from './../Helpers/AxiosInstance';
 
const ViewBranch = () => {
  let token=localStorage.getItem("token")

  let [branch,setBranch]=useState([])
  let navigate=useNavigate()

   let handleDelete=async(id)=>{
    console.log(id);
    await axiosInstance.delete(`/branches/delete/${id}`,
    {headers:{Authorization:`Bearer ${token}`}})
    window.location.assign("/admindashboard/viewBranch")
    alert("successfully data deleted")
   }
    useEffect(()=>{
     let fetchData=async()=>{
        let {data}=await axiosInstance.get("/branches/getall",
        {headers:{Authorization:`Bearer ${token}`}})
        let finalData=data.data
    setBranch(finalData)
     }
     fetchData()
    },[])
  return (
    <div  className='view-academy-div'>
      <h1>List of Branches</h1><br />
      <table className='VA-table' >
        <tr>
        <th>Sl.No</th>
        <th>Branch Address</th>
        <th>Branch Id</th>
        <th>Branch City</th>
        <th>Branch Phone.No</th>
        <th>Branch Pincode</th>
        <th>Edit</th>
        <th>Add Course</th>
        <th>Delete</th></tr>
        {branch.map((x,i)=>{
        return(
          <tr>
            <td>{i+1}</td>
            <td>{x.address}</td>
            <td>{x.id}</td>
            <td>{x.city}</td>
            <td>{x.phone}</td>
            <td>{x.pincode}</td>
            <td><button type="submit" onClick={(e)=>{
                e.preventDefault()
                navigate(`/admindashboard/UpdateBranch/${x.id}`)
              }}>Edit</button></td>
            <td><button type="submit"  onClick={(e)=>{
                e.preventDefault()
                navigate(`/admindashboard/AddCourse/${x.id}`)
              }}>Add Course</button></td>
            <td><button type="submit" onClick={()=>{
                handleDelete(x.id)
                
              }}>Delete</button></td>
          </tr>
        )
      })}
      </table>
    </div>
  )
}

export default ViewBranch