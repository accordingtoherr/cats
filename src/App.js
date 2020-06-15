import React, { useEffect, useState,Component, componentDidMount } from 'react'
// get our fontawesome imports


import Cat from './Cat.js';
import './App.css'
import Axios from 'axios';



class App extends React.Component {
  state = {
    loading: false,
    repos: null
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch(` https://api.thecatapi.com/v1/images/search`)
      .then(json => json.json())
      .then(repos => {
        this.setState({ loading: false, repos: repos });
      });
  }



render() {
    return (
    this.map.url;


(<Cat

image={cats.data.cats.url} /> )) };






</div>
    )
  }
}

export default App