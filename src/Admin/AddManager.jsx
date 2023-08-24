import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../Helpers/AxiosInstance'

const AddManager = () => {
    let token=localStorage.getItem("token")
  let navigate=useNavigate()
  let [state,setState]=useState({
    userName:"",
    email:"",
    password:"",
    phone:"",
    gender:"",
    dob:""
  })
  let {userName,email,password,phone,gender,dob}=state
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
    userName,
    email,
    password,
    phone,
    gender,
    dob
  }
  let  finalData=await axiosInstance.post("/academymanagers/save",payload,{headers : {Authorization : `Bearer ${token}`}})
  console.log(finalData);
alert(`successfully registered with ${email} as Admin manager`)
navigate("../Admin/ViewManagers.jsx")
  
  }
catch{
  console.log("unable to connect server");
}
}
  return (
    <div>
        <form action="/academy">
        <h1>Academy Manager Register</h1><br />
        <input type="text" name="userName" id="userName" placeholder='User Name' value={userName} onChange={handleData}/><br /><br />
        <input type="email" name="email" id="email" placeholder='Email Address' value={email} onChange={handleData}/><br /><br />
        <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={handleData}/><br /><br />
        <input type="text" name="phone" id="phone" placeholder='Phone number'onChange={handleData} value={phone}/><br /><br />
        <label htmlFor="gender">Gender</label><br />
        <input type="radio" name="gender" id="male" value="Male"onChange={handleData}/>
           <label htmlFor="male"> Male </label>
           <input type="radio" name="gender" id="female" value="Female" onChange={handleData} />
           <label htmlFor="female"> Female </label>
           <input type="radio" name="gender" id="other" value="Other" onChange={handleData} />
           <label htmlFor="other"> Other </label><br /><br />
           <label htmlFor="dob">Birthday</label>
           <input type="date" name="dob" id="dob" value={dob} onChange={handleData}/><br /><br />
           <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  )
}

export default AddManager