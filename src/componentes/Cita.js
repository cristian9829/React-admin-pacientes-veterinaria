import React, {Component} from 'react';

export default class Cita extends Component{

  eliminarCita = () =>{
    this.props.borrarCita(this.props.info.id)
  }

  render(){
    const {fecha, hora, mascota, propietario, sintomas} = this.props.info;
    return(
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{mascota}</h3>
          <p className="card-text"><span>Nombre del Dueño: </span>{propietario}</p>
          <p className="card-text"><span>Fecha: </span>{fecha}</p>
          <p className="card-text"><span>Hora: </span>{hora}</p>
          <p className="card-text"><span>Sintomas: </span></p>
          <p className="card-text">{sintomas}</p>
          <button className="btn btn-danger" onClick={this.eliminarCita}>Borrar &times;</button>
        </div>
      </div>
    )
  }
}