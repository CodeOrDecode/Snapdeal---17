import React from 'react'
import { Navigate } from 'react-router-dom'
import {Authcontext} from "../Context/Authcontextprovider"

const Privateroute = (props) => {

    const { auth } = React.useContext(Authcontext);
    // console.log(auth)
    if(!auth){
        return <Navigate to="/"/>
    } 
  return props.children
}

export default Privateroute