import React, { Component } from "react";

import Cat from './Cat.js';
import './App.css'




class App extends React.Component {
  state = {
    loading: false,
    
    
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch(` https://api.thecatapi.com/v1/images/search`)
      .then(json => json.json())
      
      
  };

  componentWillUnmount(){
    this.setState({ loading: true });
    fetch(` https://api.thecatapi.com/v1/images/search`)

  }


render() {
    return (


<h1>yo</h1>

    )
  }
}

export default App