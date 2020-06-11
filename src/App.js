import React, { useEffect, useState, Component } from 'react'
// get our fontawesome imports


import Cat from './Cat.js';
import './App.css'


const App = () => {
 
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats();
  }, [])

  const getCats = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search`)


    const data = await response.json();
    console.log(data.url);

    setCats(data.url);
    // setSubs(prevSubs => prevSubs.concat(data.data.children)) // Use this setState with function argument if you want to concat API response with previous state data
  }



  return (
    <div className="App">
      <h1 className="header">
     
      </h1>
    
        <button type="submit" className="button">New Cat</button>

        <Cat />


         
    </div>
  )
}

export default App;