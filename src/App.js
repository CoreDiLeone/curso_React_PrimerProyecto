import './App.css';
import data from "./JSON/personas.json";
//Aquí importamos el componente desde la carpeta componentes
import Testimonio from "./componentes/testimonio.jsx";
//Dentro del div "app" insertaremos nuestro componente
//el cuál fue creado en testimonio.js
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1 className="titulo">Esto es lo que dicen nuestros alumnos 
        sobre freeCodeCamp:</h1>

    <Testimonio
    nombre= {data.personas[0].nombre}
    imagen={data.personas[0].imagen}
    pais={data.personas[0].pais}
    cargo={data.personas[0].cargo}
    empresa={data.personas[0].empresa}
    testimonio={data.personas[0].testimonio}/>

<Testimonio
    nombre={data.personas[1].nombre}
    imagen={data.personas[1].imagen}
    pais={data.personas[1].pais}
    cargo={data.personas[1].cargo}
    empresa={data.personas[1].empresa}
    testimonio={data.personas[1].testimonio}/>
     <Testimonio 
      nombre={data.personas[2].nombre}
      imagen={data.personas[2].imagen}
      pais={data.personas[2].pais}
      cargo={data.personas[2].cargo}
      empresa={data.personas[2].empresa}
      testimonio={data.personas[2].testimonio}/>
     </div>
    </div>
  );
}

export default App;
