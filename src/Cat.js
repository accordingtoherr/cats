import React, {useState, useEffect } from "react";

import './App.css'



const CatSearchWithFunction = props => {
   const [imgUrl, setImgUrl] = useState("");
 useEffect(() => {

 }, [])

   const fetchData = async () => {
     try {
       let response = await fetch(
         `https://api.thecatapi.com/v1/images/search/${this.props.data.url}`
         
       );

       let data = await response.json();
       setImgUrl(data[0].url);
     
     } catch(e) {
       console.log("Whoops",e);
      
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
 