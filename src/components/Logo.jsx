import React from 'react'
import logo from "../assets/logo.jpg"
import { Box } from '@mui/material'

const Logo = () => {
  return (
    <Box >
      <img style={{height:"4em",width:"4em"}} src={logo}></img>
    </Box>
  )
}

export default Logo
