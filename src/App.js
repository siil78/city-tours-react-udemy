import React, { Component } from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css"
import Navbar from './components/Navbar/Navbar'
//alternativní import pomocí souboru index.js v adresáři Tourlist
//stačí zadat jen cestu k adresáři
import Tourlist from './components/TourList'

class App extends Component {
  render() {
    return(
      <>
        <Navbar/>
        <Tourlist/>
      </>
    )
  }
}

export default App;
