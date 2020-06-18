import React, { Component, useState, useEffect } from "react";

import Cat from './Cat.js';
import './App.css'



const CatSearchWithFunction = props => {
   const [imgUrl, setImgUrl] = useState("");
 
   const fetchData = async () => {
     try {
       let response = await fetch(
         `https://api.thecatapi.com/v1/images/search/${this.props.url}`
         
       );

       let data = await response.json();
       setImgUrl(data.url);
       console.log(data.url);
     } catch {
       console.log("Something went horribly wrong");
      
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
 