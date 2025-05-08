'use client'
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import Button from '@mui/material/Button';

const About = () => {
    const router=useRouter()
  return (
    <>
   
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      this is about page
    </Box>
    <Button variant="contained" onClick={()=>router.push('/pages/products')} >navigate about</Button>

    </>
  );
};

export default About;
