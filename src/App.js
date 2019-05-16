import React from 'react';
import Header from "./componentes/Header";
import AgregarCita from './componentes/AgregarCita'
import Listado from './componentes/ListaCitas';

class App extends React.Component {
  state = {
    citas: []
  }

  componentDidMount(){
    const citasLocalStorage = localStorage.getItem('citas');

    if(citasLocalStorage){
      this.setState({
        citas: JSON.parse(citasLocalStorage)
      })
    }
  }


  componentDidUpdate(){
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = (nuevaCita) =>{
    const citas = [...this.state.citas, nuevaCita];
    this.setState({
      citas: citas
    })
  }

  borrarCita = id =>{
    //Obtener copia del state 
    const citaActuales = [...this.state.citas] ;
    //Borrar el elemento del state
    const citas = citaActuales.filter(cita => cita.id !== id);
    //Actualizar el state
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
              borrarCita = {this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
