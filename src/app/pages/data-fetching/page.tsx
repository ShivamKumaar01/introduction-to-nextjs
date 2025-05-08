// import { Card } from "@mui/material";
'use client'
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
type repo = {
  id: number;
  price: number;
  title: string;
  images: string[];
};

const DataFetching =() => {
    const [product,setProduct]=useState<repo[]>([])

     async function dataextract(){
         const res = await fetch("https://api.escuelajs.co/api/v1/products");
         const data: repo[] = await res.json();
        console.log(data);
        setProduct(data);
        console.log(product,"this is product")
        console.log(typeof data);
     }
     console.log(product,"this is product")


  useEffect(()=>{
    dataextract()
  },[])

  return (
    <>
      {product?.map((item) => {
        return (
          <Box key={item.id}>
            <Card key={item.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.images[0]}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Price:${item.price}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        );
      })}
    </>
  );
};

export default DataFetching;
