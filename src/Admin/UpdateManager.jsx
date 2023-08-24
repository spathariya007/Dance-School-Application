import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Helpers/AxiosInstance'
import { toast } from 'react-toastify'

const UpdateManager = () => {
  let[manager,setManager]=useState([])
  let token=localStorage.getItem("token")
  let {id}=useParams()
  let navigate=useNavigate()

  let handleUpdate= async (e)=>{
    e.preventDefault()
    try {
      let payload=manager
      await axiosInstance.put("/academymanagers/update",payload,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      toast.success("Update Successfully",{position:toast.POSITION.TOP_CENTER})
      navigate("../Admin/ViewManagers.jsx")
    } catch (error) {
      console.log("unable to connect server");
    }
  }

  let handleData=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setManager({...manager,[name]:value})
  }

  useEffect(()=>{
    let fetch=async ()=>{
      let {data}= await axiosInstance.get(`/academymanagers/get/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      let fetchedData=data.data
      setManager(fetchedData)
    }
    fetch()
  },[])
  return (
    <>
    <form action="" className="text">
        <h2>Academy Manager Update</h2>
        <label htmlFor="userName">Name</label>
        <input
          type="text"
          name="userName"
          id="username"
          placeholder="name"
          value={manager.userName}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={manager.email}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={manager.password}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="phone">Phone no</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="phone"
          value={manager.phone}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="dob">Birthday</label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={manager.dob}
          onChange={handleData}
        />
        <br />
        <br />
        <button type="submit" onClick={handleUpdate}>Update</button>
      </form>
    </>
  )
}

export default UpdateManager