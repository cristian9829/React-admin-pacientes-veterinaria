import React from 'react';
import Header from "./componentes/Header";
import AgregarCita from './componentes/AgregarCita'
import Listado from './componentes/ListaCitas';

class App extends React.Component {
  state = {
    citas: []
  }

  crearCita = (nuevaCita) =>{
    const citas = [...this.state.citas, nuevaCita];

    this.setState({
      citas: citas
    })
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
          <div className="col-md-6">
            <Listado
              citas = {this.state.citas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
