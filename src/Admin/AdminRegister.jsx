import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../Helpers/AxiosInstance'
import img from '../Component/images/img1.webp'


const AdminRegister = () => {
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
    console.log(data);
  }

  let handleSubmit=async (e)=>{
    e.preventDefault()
    console.log(data);
    try{
      let payload={
        userName,
        email,
        password,
        phone,
        gender,
        dob
      }
      let finalData= await axiosInstance.post("/admins/save",payload)
      console.log(finalData);
      alert(`successfully registered with ${email} as user`)
      navigate("/login")
    }
   catch{
    console.log("unable to connect");
   }
  }
  return (
    <div className='m-div'>
      <img src={img}  alt="" width={"1263px"}/>
    <div className='div'>
      <form action="" className='frm'>
          <div className='register'> ADMIN REGISTER</div> <br />
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
           <label htmlFor="male" style={{color: "#fff"}} >Male</label>
            <input type="radio" name="gender" id="female" value="Female"  className='in'onChange={handleData}/>
            <label htmlFor="female"  style={{color: "#fff"}} >Female</label></div>
          <label htmlFor="dob" className='lbl'>Date of Birth</label>
          <input type="date" name="dob" id="dob" value={dob} className='in' onChange={handleData}/>
          <button type="submit"  className='btn'onClick={handleSubmit}>Register</button>
      </form>
    </div>
    </div>
  )
}

export default AdminRegister