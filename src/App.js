import React, { Component } from 'react';
import './App.css';
import Conversor from './conversor/Conversor'


class App extends  Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
          <div className="app">
            <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          </div>
        )
    }
}

export default App;