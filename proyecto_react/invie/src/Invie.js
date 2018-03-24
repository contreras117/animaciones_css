import React, { Component } from 'react';
import logo from './logo.svg';
import './css/style.css';
import Portada from './components/Portada.js'
import Guitarras from './components/Guitarras.jsx'
import Footer from './components/Footer.jsx'

class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        {/*Portada */}
        <Portada />
        {/* Guitarras */}
        <Guitarras/>
        {/* Footer */}
        <Footer/>
      </section>
    );
  }
}

export default Invie;
