//ESTA ES COMO LA PLANTILLA:
import React from 'react';
import '../hojas-de-estilo/Testimonio.css'; //React si no le pones .css, va a creer que es un archivo .js, OJO!
import ReactMarkdown from 'react-markdown';

function Testimonio(props) {
    console.log(props.testimonio);
    const testimonioLimpio = typeof props.testimonio === "string" 
        ? props.testimonio.trim() 
        : "Error: Testimonio no válido.";

    return (
        //retorna elemento JSX = html + javascript
        <div className="contenedor-testimonio">
            <img
                className="imagen-testimonio"
                //src={require('../imagenes/testimonio-emma.png')} // esto es fijo
                src={require(`../imagenes/testimonio-${props.imagen}.png`)} // esto es DINAMICO                
                alt={`Foto de ${props.nombre}`}
            />
            <div className='contenedor-texto-testimonio'>
                <p className="nombre-testimonio">
                    <strong>{props.nombre} </strong> en {props.pais}</p>
                <p className="cargo-testimonio">
                    {props.cargo} en <strong> {props.empresa} </strong></p>

                <div className='texto-testimonio'>
                    {(() => {
                        try {
                            return <ReactMarkdown>{props.testimonio.trim()}</ReactMarkdown>;
                        } catch (error) {
                            console.error("Error al renderizar Markdown:", error);
                            return <p>Error al cargar el testimonio.</p>;
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}

export default Testimonio;
