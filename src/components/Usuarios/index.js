import React, { Component } from "react";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import Tabla from "./Tabla";
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions' //Importamos *'todo' como usuariosActions


class Usuarios extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
    };
  }

  componentDidMount(){
    if (!this.props.usuarios.length) {
      this.props.traerTodos();
    }
  }


  
  ponerContenido = () => {
    if (this.props.cargando) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal mensaje={this.props.error}/>;
    }
    return <Tabla />;
  }
  
  render() {
    return(
      <div className="main-container users">
        <h2>Users:</h2>
        { this.ponerContenido()}
      </div>
    );
  }
}
const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
}


export default connect(mapStateToProps,usuariosActions)(Usuarios);