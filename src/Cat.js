import React from 'react';
// get our fontawesome imports


import './App.css';

 const Cat =  ({image}) =>{


    return(

  <div className="items">  
  <h1>Cats</h1>
 <img src={image} alt="" ></img>
</div>

    );
 }
 
 export default Cat;