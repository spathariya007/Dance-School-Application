// import React, { useState } from 'react'
// import { Box,TextField,Typography,Button} from '@mui/material'
 

// const Login = () => {
//   const[isRegister,setRegister]=useState(false)
//  const [inputs,setInputs]=useState({
//   name:"", email:"", password:""
//  });
//  const handleChange= (e) => {
//   setInputs((prevState) => ({
//     ...prevState,[e.target.name] : e.target.value,
//   }));
//  };
//  const handleSubmit = (e)=>{
//   e.preventDefault()
//   console.log(inputs);
//  }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box display="flex" 
//         flexDirection={"column"} 
//         maxWidth={600} 
//         alignItems='center' 
//         justifyContent='center' 
//         margin='auto'
//         marginTop={5}
//         padding={3}
//         borderRadius={5}
//         boxShadow={'5px 5px 10px #ccc'}
//         sx={{":hover":{
//           boxShadow:'10px 10px 20px #ccc'
//         }}}>
//         <Typography
//                     variant='h2'
//                     padding={3}
//                     textAlign='center'
//                     >{isRegister ? "Register" : "Login"}</Typography>
//                     {isRegister&&(
//         <TextField
//         onChange={handleChange}
//                   name='name'
//                   // value={inputs.name}
//                    margin='normal'
//                    type={'name'}
//                    variant='outlined'
//                    placeholder='Name'
//                    />
//                     )}
//         <TextField
//          onChange={handleChange}
//                   email="email"
//                   // value={inputs.email}
//                   margin='normal'
//                   type={'email'}
//                   variant='outlined'
//                   placeholder='Emial'/>
//         <TextField
//          onChange={handleChange}
//                    password="password"
//                   //  value={inputs.password}
//                    margin='normal'
//                   type={'password'}
//                   variant='outlined'
//                   placeholder='Password'/>
//         <Button type="submit"
//                 sx={{marginTop:3, borderRadius:3}}
//                 variant='contained'
//                 color='warning'>
//                                 {isRegister ? "Register" : "Login"}
//         </Button>
//         <Button onClick={()=>setRegister(!isRegister)} sx={{marginTop:3, borderRadius:3}}
//                  > Register your {isRegister ? "Login" : "Account"}
//         </Button>

//         </Box>
//          </form>
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react'
 import './Login.css'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../Helpers/AxiosInstance'
 


const Login = () => {

  let navigate = useNavigate();

  let [state, setState] = useState({
    userEmail: "",
    password: "",
  });

   let { userEmail, password } = state;

   let handleChange = (e) => {
     let name = e.target.name;
     let value = e.target.value;
     setState({ ...state, [name]: value });
   };

   let handleSubmit = async (e) => {
     e.preventDefault();
     console.log(state);

     try {
       let payload = { userEmail, password };

       let {data} = await axiosInstance.post("/authenticate", payload);
       let token = data.token;
       let role = data.role;
       console.log(token);
       console.log(role)

       if (token) {
         localStorage.setItem("token", token);
         localStorage.setItem("role", role);
         if (role === "ROLE_ADMIN") {
          console.log("hiiiii")
           alert(`successfully logged in with email ${userEmail} as admin`);
           navigate("/");
         } else {
          console.log("helloooo")
           alert(
             `successfully logged in with the email ${userEmail} as user`
           );
           navigate("/");
         }
       } else {
         localStorage.removeItem("token", token);
         localStorage.removeItem("role", role);
       }
     } catch {
       alert("invalid password or username");
       console.log("unable to connect");
     }
   };

  return (

     <div className='div-login'>
     <img src="https://getwallpapers.com/wallpaper/full/d/5/9/943570-download-free-dance-background-images-1920x1413.jpg" alt="" width={'1263px'} height={'800'}  />

     <form action="" class="form_main" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="">Email</label>
      <input type="text"  name="userEmail" value = {userEmail}onChange={handleChange}/>
    </div>
    <div>
    <label htmlFor="">Password</label>
      <input type="text" name='password' value ={password}onChange={handleChange} />
    </div>
    <div>
      <button>LOGIN</button>
    </div>
</form>
</div>    
  )
}

export default Login
