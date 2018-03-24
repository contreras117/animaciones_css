/* En jsx (HTML incrustado en react js) debes cambiar las palabras reservadas "class" por className, 
"for" por htmlFor y "checked" por defaultChecked */

import React, {Component} from 'react';
import white from '../Media/invie-white.png'

class Footer extends Component
{
    render ()
    {
        return(
            <footer className="footer">
		<div className="contenedor">
            <div className="contacto">
                <img src={white} alt="Logotipo en blanco"/>
                <a href="tel:+523024235678"><strong>Telefono</strong><span>3024235678</span></a>
                <a href="mailto:contacto@inivie.com"><strong>E-mail</strong><span>contacto@inivie.com</span></a>
            </div>
            <form className="formulario">
                <div className="footer_col1">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" required placeholder="Requerido" name="nombre" />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" required name="email" />
                    <div className="sexo">
                        <label htmlFor="mujer">
                            <input type="radio" id="mujer" name="sexo" defaultChecked value="mujer" /> Mujer
                        </label>
                        <label htmlFor="hombre">
                            <input type="radio" id="hombre" name="sexo" value="hombre" /> Hombre
                        </label>
                    </div>
                    <div className="intereses">
                        <label htmlFor="cotizacion">
                            <input type="checkbox" id="cotizacion" name="intereses"  defaultChecked value="cotizacion" /> Cotizacion
                        </label>
                        <label htmlFor="reclamos">
                            <input type="checkbox" id="reclamos" name="intereses" value="reclamos" /> Reclamos
                        </label>
                        <label htmlFor="comentarios">
                            <input type="checkbox" id="comentarios" name="intereses" value="comentarios" /> Comentarios
                        </label>
                        <label htmlFor="otros">
                            <input type="checkbox" id="otros" name="intereses" value="otros"/> Otros
                        </label>
                    </div>
                </div>
                <div className="footer_col2">
                    <label htmlFor="coments">Comentarios</label>
                    <textarea id="coments" name="comentarios" cols="30" rows="7"></textarea>
                    <input type="submit" value="Enviar" className="button"/>
                </div>
            </form>
		</div>
	</footer>
        );
    }
}

export default Footer;