import React from 'react';
// get our fontawesome imports


import './App.css';

 const Cat =  ({url}) =>{


    return(

  <div className="items">  
  <h1>Cats Are Cool</h1>
 <img className="cat"src="{url}"alt="" ></img>
</div>

    );
 }
 
 export default Cat;