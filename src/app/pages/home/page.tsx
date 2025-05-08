'use client'
import { Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button';
import React from 'react'

const Home = () => {
    const router=useRouter();
  return (
    <>
    
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
       This is home page
     </Box>
     <Button variant="contained" onClick={()=>router.push('/pages/about')} >navigate about</Button>
    
     
     </>
  )
}

export default Home
