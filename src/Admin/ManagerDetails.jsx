// import { faker } from '@faker-js/faker';
// import React, { useEffect, useState } from 'react'
// import {useNavigate, useParams } from 'react-router-dom'
// import axiosInstance from '../Helpers/AxiosInstance';
// import './ManagerDetails.css'

// const ManagerDetails = () => {

//   let token = window.localStorage.getItem("token");
//   let {id}=useParams()
//   let navigate= useNavigate()

//   let [userdata, setUserdata] = useState("");
  
//   let handleDelete = async(id)=>{
//       await axiosInstance.delete(`/academymanagers/delete/${id}`,
//     {headers:{Authorization:`Bearer ${token}`}})
//     window.location.assign("/admindashboard/viewAcademyManager")
//     navigate('/admindashboard/viewAcademyManager')
//     alert("deleted")
//   }


//   let [fake,setFake] = useState(faker.image.avatar());

//   useEffect(() => {
//     let fetchData = async () => {
    
//       try {
//         let data  = await axiosInstance.get(`/academymanagers/get/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           }
//         });
//         let fetchData = data.data;
//         setUserdata(fetchData);
//       } catch (error) {
//         console.log(fetchData);
//       }
//     };
//     fetchData();
//   }, []);

    
//   return (
//     <div className="detail">
//       <h2>Academic Manager Deatils</h2>
//       <img src={fake} alt="" className="img" />
//       <div>
//         Name : <b>{userdata.userName}</b>
//         <div>
//           Email: <b>{userdata.email}</b>
//         </div>
//         <div>
//           Phone no: <b>{userdata.phone}</b>
//         </div>
//         <div>
//           Gender: <b>{userdata.gender}</b>
//         </div>
//         <div>
//           DOB: <b>{userdata.dob}</b>
//         </div>
//         <div className="btn">
//           <button onClick={(e)=>{
//             e.preventDefault()
//             navigate(`/admindashboard/UpdateManager/${userdata.id}`)
//           }}>Update</button>
//           <button onClick={(e)=>{
//             e.preventDefault()
//             navigate(`/admindashboard/addAcademy/${userdata.id}`)
//           }}>Add Academy
//           </button>
//           <button onClick={(e)=>{
//             e.preventDefault()
//                 handleDelete(userdata.id)
//           }}>Delete</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ManagerDetails


import React, { useEffect,useState } from 'react'
import './ManagerDetails.css'
import { faker } from '@faker-js/faker'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Helpers/AxiosInstance'


const ManagerDetails = () => {
    
    let token=localStorage.getItem("token")
    let {id} = useParams()

    let img=faker.image.avatar()
    let [manager,setManager]=useState("")
    let navigate= useNavigate()
  
    // let handleAcademy=(e)=>{
    //   e.preventDefault()
    //   navigate("/admindashboard/addacademy")
    // }
    let handleDelete = async(id)=>{
       await axiosInstance.delete(`/academymanagers/delete/${id}`,
      {headers:{Authorization:`Bearer ${token}`}})
      window.location.assign("/admindashboard/viewAcademyManager")
      alert("Successfully data deleted")
    }
    
    useEffect(()=>{
      let fetchData=async()=>{
        let {data} = await axiosInstance.get(`/academymanagers/get/${id}`,
        {headers:{Authorization:`Bearer ${token}`}})
        let finalData=data.data
        setManager(finalData)
        console.log(finalData);
      }
      fetchData()
    },[])
  
    return (
      <>
      <h2 className='academydetail'>View Manager's Details</h2>
      <div className='managermain'>
          <div className='managersdiv'>
            <div  className='managers'>
            <div><img src={img} alt="" /></div>
            <div>
              <h2>{`Name: ${manager.userName}`}</h2>
              <p>{`Email: ${manager.email}`}</p>
              <p>{`Phone: +91-${manager.phone}`}</p>
              <p>{`Gender: ${manager.gender}`}</p>
              <p>{`DOB: ${manager.dob}`}</p>
            </div>
            </div>
            <div>
              <button className='btu mx-1' onClick={(e)=>{
                e.preventDefault()
                navigate(`/admindashboard/UpdateBranch/${manager.id}`)
              }}>Update</button>
              <button className='bta mx-1' onClick={(e)=>{
                e.preventDefault()
                navigate(`/admindashboard/addacademy/${manager.id}`)
              }}>Add Academy</button>
              <button className='btd mx-1' onClick={()=>{
                handleDelete(manager.id)
              }}>Delete</button>
            </div>
          </div>
      </div>
      </>
    )
  }

export default ManagerDetails