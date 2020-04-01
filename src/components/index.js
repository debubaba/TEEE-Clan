import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import Sales from './sales.js'
import Navbar from './Navbar.js'

export default function Home(){
  return(
    <Box style={{height: "100%"}}>
      <Sales />

    </Box>
  )
}
