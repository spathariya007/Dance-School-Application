
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Helpers/AxiosInstance'
 
const UpdateBranch = () => {
  let[branch,setBranch]=useState([])
  let token=localStorage.getItem("token")
let {id}=useParams()
let navigate=useNavigate()

let handleUpdate=async(e)=>{
e.preventDefault()
try{
  let payload=branch
await axiosInstance.put(`/branches/update/${id}`,payload,{headers:{Authorization:`Bearer ${token}`}})
alert('Updated Successfully')
navigate("/admindashboard/viewBranch")
}
catch{
  console.log("unable to connect server");
}
}
let handleData=(e)=>{
  let name=e.target.name
let value=e.target.value
setBranch({...branch,[name]:value})
}
  useEffect(()=>{
    let fetch=async()=>{
      let {data}=await axiosInstance.get(`/branches/get/${id}`,{headers:{Authorization:`Bearer ${token}`}})
    let fetchedData=data.data
    setBranch(fetchedData)
    }
    fetch()
  },[])
  return (
    <div className='adacademy-div'>
      <form action="" className='ad-form'>
            <h1>Update Branch</h1>
            <label htmlFor="address">Address - </label>
            <input type="text" name="address" id="address" value={branch.address} onChange={handleData}/><br /><br />
            <label htmlFor="city">City - </label>
            <input type="text" name="city" id="city" value={branch.city} onChange={handleData}/><br /><br />
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" value={branch.phone} onChange={handleData}/><br /><br />
            <label htmlFor="pincode">Pincode -  </label>
            <input type="text" name="pincode" id="pincode"  value={branch.pincode} onChange={handleData}/><br /><br />
            <button type="submit" onClick={handleUpdate}>Update</button>
        </form>
    </div>
  )
}

export default UpdateBranch