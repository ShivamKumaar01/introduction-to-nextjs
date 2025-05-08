'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
const Product = ({params}:{params:{id:string}}) => {
    const router=useRouter()
  return (
    <>
   
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This is details of product whose id is {params.id}.
    </Box>
    <Button variant="contained" onClick={()=>router.push('/pages/home')} >navigate home</Button>
    </>
  )
}

export default Product
