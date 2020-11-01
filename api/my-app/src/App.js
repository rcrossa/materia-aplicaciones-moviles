import React from 'react';
import './App.css';
import Mostrar from './componentes/muestraap';
import Menu from './componentes/menu';
import  MostrarApi  from './componentes/apidatos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <h1 className="titulo1">Materia Aplicaciones moviles</h1>
        <h2 className="titulo2">Prueba de api</h2>
      <div className="mostrar">
        <Mostrar/></div>
      </header>
      <body>
        {/* <MostrarApi/> */}
      </body>
    </div>
    
  );
}

export default App;
