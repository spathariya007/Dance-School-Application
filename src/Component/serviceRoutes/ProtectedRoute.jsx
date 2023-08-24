import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    if(localStorage.getItem("token")){
        return(
            <>
            {children}
            </>
        )
    }else{
        return(
            <>
            {alert("Please Login to view Page")}
            <Navigate to="/login"/>
            </>
        )
    }
}

export default ProtectedRoute