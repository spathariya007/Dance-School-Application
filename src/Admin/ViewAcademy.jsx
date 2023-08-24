import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from './../Helpers/AxiosInstance';
import './ViewAcademy.css'
const ViewAcademy = () => {
  let token=localStorage.getItem("token")

  let [academy,setAcademy]=useState([])
  let navigate=useNavigate()

  let handleDelete=async (id)=>{
      await axiosInstance.delete(`/academies/delete/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    window.location.assign("/admindashboard/viewAcademy")
    alert("successfully data deleted")
    navigate("/admindashboard/viewAcademy")
  }

  useEffect(()=>{
    let fetchData=async ()=>{
      let {data}=await axiosInstance.get("/academies/getall",
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      let finalData = data.data;
      setAcademy(finalData)
    }
    fetchData()
  },[])
  return (
    <>
     <div className='view-academy-div'>
        <h2>View Academy</h2>
        <table className='VA-table'>
          <tr>
            <th>SL No.</th>
            <th>ACADEMY NAME</th>
            <th>DESCRIPTION</th>
            <th>EMAIL</th>
            <th>CONTACT NUMBER</th>
            <th>EDIT</th>
            <th>ADD BRANCH</th>
            <th>Delete</th>
          </tr>
         {academy.map((x,i)=>{
          return (
            <tr  >
              <td>{i + 1}</td>
              <td>{x.academyName}</td>
              <td>{x.description}</td>
              <td>{x.email}</td>
              <td>{x.contact}</td>
              <td  >
                <button type='submit' onClick={(e)=>{
                  e.preventDefault()
                  navigate(`/admindashboard/EditAcademy/${x.id}`)
                }}>EDIT</button>
              </td>
              <td  >
                <button type='submit' onClick={(e)=>{
                  e.preventDefault();
                  navigate(`/admindashboard/AddBranch/${x.id}`)
                  }}>ADD</button>
              </td>
              <td  >
                <button type='submit' onClick={()=>{
                  handleDelete(x.id)
                }}>Delete</button>
              </td>
            </tr>
          );
         })

         }
        </table>
      </div>
    </>
  )
}

export default ViewAcademy