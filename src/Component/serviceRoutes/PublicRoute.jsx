import React from 'react'

const PublicRouter = ({children}) => {

    if(localStorage.getItem("token")){
        return (
            <div>{children}</div>
            )
    }else{
        return (
            <div>{children}</div>
            )
    }
}

export default PublicRouter