import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Wizard from './Component/Wizard/Wizard';
import Header from './Component/Header/Header';
import router from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        
      { router }
      <Dashboard/>
      <Wizard/>
      <Header/>


      </div>

      
    );
  }
  
}
const mapStateToProps = state => {
  return state;
}



export default App;





// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>