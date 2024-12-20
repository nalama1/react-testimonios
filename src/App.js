
import './App.css';
//import Testimonio from '../src/componentes/Testimonio';
import Testimonio from './componentes/Testimonio';
import testimoniosData from './data/testimonios.json'

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h2> Esto es lo que dicen nuestros alumnos sobre el curso:</h2>
        {
          testimoniosData.map((testimonio, index) => (
            <Testimonio
              key={index}
              nombre={testimonio.nombre}
              pais={testimonio.pais}
              imagen={testimonio.imagen}
              cargo={testimonio.cargo}
              empresa={testimonio.empresa}
              testimonio={testimonio.testimonio}
            />
          )
          )
        }
      </div>
    </div>
  );
}

export default App;
