import React, { Component } from "react";
import uuid from 'uuid'
export default class AgregarCita extends Component{
  //Refs

  nombreMascotaRef = React.createRef();
  nombrePropietarioRef = React.createRef();
  fechaRef = React.createRef();
  horaRef = React.createRef();
  sintomasRef = React.createRef();
  
  state = {
    error: false
  }

  crearNuevaCita = e =>{
    e.preventDefault()
    const mascota = this.nombreMascotaRef.current.value,
          propietario = this.nombrePropietarioRef.current.value,
          fecha = this.fechaRef.current.value,
          hora = this.horaRef.current.value,
          sintomas = this.sintomasRef.current.value;

    if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
      this.setState({
        error: true
      })
    }else{
      const nuevaCita = {
        id: uuid(),
        mascota: mascota,
        propietario: propietario,
        fecha : fecha,
        hora : hora,
        sintomas: sintomas
      }
  
      //Se envia el objeto al componente App para actulizar el state
      this.props.crearCita(nuevaCita);    

      //Resetiar Formulario
      e.currentTarget.reset()

      //Eliminar error
      this.setState({
        error: false
      })
    }
  }

  render(){
    const existeError = this.state.error;
    return(
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agrega las Citas Aqui</h2>

          <form onSubmit={this.crearNuevaCita}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
              <div className="col-sm-8 col-lg-10">
                <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
              <div className="col-sm-8 col-lg-10">
                <input ref={this.nombrePropietarioRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input ref={this.fechaRef} type="date" className="form-control" />
              </div>                            

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                <div className="col-sm-8 col-lg-4">
                <input ref={this.horaRef} type="time" className="form-control" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className="col-sm-8 col-lg-10">
                <textarea ref={this.sintomasRef}  className="form-control"></textarea>
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <button type="submit" className="btn btn-success w-100">Agregar</button>
              </div>
            </div>
          </form>
          { existeError ? <div className="aler alert-danger text-center text-white"><p className="lead">Todos los campos son obligatorios</p></div> : '' }
        </div>
      </div>
    )
  }
}
