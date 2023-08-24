import React from 'react'
import { useState } from 'react'
import img from '../Component/images/img1.webp'
import axiosInstance from '../Helpers/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import './admin.css'
 
const AddAcademyManager = () => {
  let token=window.localStorage.getItem("token")
  let navigate=useNavigate()

  let [data, setData]=useState({
    userName:"",
    email:"",
    password:"",
    phone:"",
    gender:"",
    dob:""
  })

  let {userName,email,password,phone,gender,dob}=data
  let handleData=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setData({...data,[name]:value})
  }

  let handleSubmit=async (e)=>{
    e.preventDefault()
    console.log(data);
   let data1= async()=>{
    try{
      let payload ={userName,email,password,phone,gender,dob}
      await axiosInstance.post("/academymanagers/save",payload,{
        headers:{Authorization:`Bearer ${token}`}
      })
      navigate("/admindashboard/viewAcademyManager")

    }
    catch(error){
      console.log(error.code)

    }
   }
   data1();
   
    setData({
      userName:"",
      email:"",
      password:"",
      phone:"",
      gender:"",
      dob:""
    })
    
  }
  return (
    <div className='admin-m-div'>
      <img src={img}  alt=""/>
    <div className='div'>
      <form action="" className='frm'>
          <div className='register'> Add Academy Manager</div> <br />
          <label htmlFor="userName" className='lbl'>Username</label>
          <input type="text" name="userName" id="userName"   placeholder='userName'  className='in'onChange={handleData}/>
          <label htmlFor="" className='lbl'>Email</label>
          <input type="email" name="email" id="email" value={email} placeholder='email'  className='in'onChange={handleData} />
          <label htmlFor="" className='lbl'>Password</label>
          <input type="password" name="password" id="password" value={password} placeholder='password'  className='in'onChange={handleData}/>
          <label htmlFor="" className='lbl'>Contact No</label>
          <input type="text" name="phone" id="phone" value={phone} placeholder='phone' className='in' onChange={handleData} />
           <label htmlFor="" className='lbl'>Gender</label>
           <div><input type="radio" name="gender" id="male" value="Male" className='in' onChange={handleData}/>
           <label htmlFor="male" >Male</label>
            <input type="radio" name="gender" id="female" value="Female"  className='in'onChange={handleData}/>
            <label htmlFor="female"  >Female</label></div>
          <label htmlFor="dob" className='lbl'>Date of Birth</label>
          <input type="date" name="dob" id="dob" value={dob} className='in' onChange={handleData}/>
          <button type="submit"  className='btn' onClick={handleSubmit}>Register</button>
      </form>
    </div>
    </div>
  )
}   

export default AddAcademyManager