import React, { Component, useState, useEffect } from "react";

import Cat from './Cat.js';
import './App.css'



const CatSearchWithFunction = props => {
   const [imgUrl, setImgUrl] = useState("");
 useEffect(() => {

 })

   const fetchData = async () => {
     try {
       let response = await fetch(
         `https://api.thecatapi.com/v1/images/search/${this.props.data.url}`
         
       );

       let data = await response.json();
       setImgUrl(data[0].url);
     
     } catch {
       console.log("Whoops");
      
     }
   };
 
   useEffect(() => {
     fetchData();
   });
 
   return (
     <div>
       
       <img src={imgUrl} />
     </div>
   );
 };
 
 export default CatSearchWithFunction;
 