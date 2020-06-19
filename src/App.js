import React, { Component } from "react";

import CatFetchingComponent from "./Cat";


class App extends Component {
  state = {
    url: ''
    
  };

  render() {
    return (
      <div className="App">
        <h1>Random Cats</h1>
        <button
          type="button"
          onClick={() =>
            this.setState({
              url: Math.floor(Math.random() * 22) + 1
            })
          }
        >
        Another Cat
        </button>
        <CatFetchingComponent url={this.state.url} /> 
        </div>
    );
  }
}

export default App;
