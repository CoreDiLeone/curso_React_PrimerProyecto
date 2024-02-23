//Debemos inicializar lo que queramos programar 
//importando react en el archivo
import React from "react";
//Debemos importar la hoja de estilos de la
//siguiente manera, aquí si es necesario incluir
//la extensión, si no react asumirá que es un 
//archivo javascript.
import "../hojas-estilo/testimonio.css";

//Aquí creamos la función que va a regresar 
//el componente que vamos a crear
function Testimonio(props) {
//Esta función de react lleva props, estas props van
//entre paréntesis
//dentro de los paréntesis de retorno debemos 
//escribir la estructura del componentes en JSX
return (
//como img es una "self-closing tag", o sea, una etiqueta de 
//cierre automático se debe escribir la etiqueta de apertura 
//con na barra inclinada al final. 
<div className="div-testimonio">

<img 
className="img-testimonio" 
src={require(`../imagenes/testimonio-${props.imagen}.png`)}
alt={`img-${props.nombre}`}/>
<div className="div-texto-testimonio">
<p className="nombre-testimonio">
  <strong>{props.nombre}</strong> 
en {props.pais}</p>
<p className="cargo-testimonio">{props.cargo} en
<strong> {props.empresa}</strong></p>
<p className="texto-testimonio">"{props.testimonio}"</p>
</div>
</div>
    );
}

//Aquí exportamos nuestro componente
export default Testimonio;

//Te quedaste en min 2:39:14 del curso 
