import React from 'react'

const AdminRouters = ({children}) => {
  if(localStorage.getItem("role")==="ROLE_ADMIN"){
return(
    <div>{children}</div>
)
  }
  else{
    alert("Only Admin can access")
  }
}

export default AdminRouters