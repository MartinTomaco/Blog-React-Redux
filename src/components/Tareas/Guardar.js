import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import { Redirect } from "react-router";
import '../../css/guardar.css'

import * as tareasActions from "../../actions/tareasActions";

class Guardar extends Component {
    componentDidMount(){
        const {
            match: { params: {usu_id, tar_id}},
            tareas,
            cambioUsuarioId,
            cambioTitulo,
            limpiarFormulario,
        } = this.props;
        if(usu_id && tar_id) {
            const tarea = tareas[usu_id][tar_id];
            cambioUsuarioId(tarea.userId);
            cambioTitulo(tarea.title);
        }else{
          limpiarFormulario();
        }
    }
  cambioUsuarioId = (event) => {
    this.props.cambioUsuarioId(event.target.value);
  };
  cambioTitulo = (event) => {
    this.props.cambioTitulo(event.target.value);
  };

  guardar = () => {
    const { 
        match: { params: {usu_id, tar_id}},
        tareas,
        usuario_id, 
        titulo, 
        agregar,
        editar,
    } = this.props;

    const nueva_tarea = {
      userId: usuario_id,
      titulo: titulo,
      completed: false,
    };

    if (usu_id && tar_id) {
        const tarea = tareas[usu_id][tar_id];
        const tarea_editada = {
            ...nueva_tarea,
            completed: tarea.completed,
            id: tarea.id,           
        };
        editar(tarea_editada);
    }else{
        agregar(nueva_tarea);
    }

  };
  deshabilitar = () => {
    const { titulo, usuario_id, cargando } = this.props;
    if (cargando) {
      return true;
    }
    if (!usuario_id || !titulo) {
      return true;
    }
    return false;
  };

  mostrarAccion = () => {
    const { error, cargando } = this.props;
    if (cargando) {
      return <Spinner />;
    }
    if (error) {
      return <Fatal mensaje={error} />;
    }
    
  };

  render() {
    console.log(this.props);
    return (
      <div className="main-container">
        {this.props.regresar ? <Redirect to='/tareas' /> : ''     
        }
        <h2> Guardar Tareas</h2>
        <h3>Usuario id:</h3>
        <input
          className="inputTask"
          type="number"
          value={this.props.usuario_id}
          onChange={this.cambioUsuarioId}
        />
        <h3>Título:</h3>
        <input
        className="inputTask"
        value={this.props.titulo} 
        onChange={this.cambioTitulo}
        />
        <br/>
        <button className="saveTaskButton" onClick={this.guardar} disabled={this.deshabilitar()}>
          Guardar
        </button>
        {this.mostrarAccion()}
      </div>
    );
  }
}
const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Guardar);
