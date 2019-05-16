import React from 'react';
import Header from "./componentes/Header";
import AgregarCita from './componentes/AgregarCita'

class App extends React.Component {
  crearCita = () =>{
    console.log("Desde app.js")
  }

  render(){
    return (
      <div className="container">
        <Header
          titulo={'Administrador de Pacientes de Veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
              crearCita = {this.crearCita}         
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
