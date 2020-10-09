import React, {useState, useEffect } from "react";
import './App.css'

const CatSearchWithFunction = props => {
   const [imgUrl, setImgUrl] = useState("");

   const fetchData = async () => {
     try {
       let response = await fetch(
         `https://api.thecatapi.com/v1/images/search`
         
       );

       let data = await response.json();

       setImgUrl(data[0].url);
     
     } catch(e) {
       console.log("Whoops",e);  
     }
   };
 
   useEffect(() => {
     fetchData();
   }, [props.url]);
 
   return (
     <div> 
       <img className="catpic" src={imgUrl} alt="catpic"/>
     </div>
   );
 };
 
 export default CatSearchWithFunction;
 