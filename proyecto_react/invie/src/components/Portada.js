/* Todos los componentes deben importar React.
(Component es un metodo dentro de React, por eso esta entre {}) */
import React, {Component} from 'react';
import logo from '../Media/invie2x.png'

class Portada extends Component
{
  render ()
  {
    /* El metodo render siempre debe retornar algo */
    return (
      <section id="portada" className="portada background">
        <header id="header" className="contenedor header">  
          <figure className="logotipo">
            <img src={logo} alt="Invie logotipo" width="186" height="60"/>
          </figure>
          <nav className="menu">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="precios.html"  target="_blank">Precios</a>
              </li>
              <li>
                <a href="index.html#guitarras">Guitarras</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="contenedor">
          <h1 class="titulo">Guitarras <span>invie</span>sibles</h1>
          <h3 class="title-a">Sé la estrella de rock que siempre quisite ser</h3>
          <a class="button" href="#guitarras">Conoce más</a>
        </div>
      </section>
    );
    
  }
}

export default Portada;