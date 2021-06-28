import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";

//Los destructuro y renombro al mismo tiempo:
const { traerTodos: usuariosTraerTodos} = usuariosActions; 
const { traerPorUsuario: publicacionesTraerPorUsuario} = publicacionesActions;

class Publicaciones extends Component {

  async componentDidMount() {
    const {
      usuariosTraerTodos,
      publicacionesTraerPorUsuario,
      match: { params: { key }}
    } = this.props;

    //Si no tiene usuarios, primero los cargo y cuando termina cargo las publicaciones
    if (!this.props.usuariosReducer.usuarios.length) {
     await usuariosTraerTodos();
    }
    // const key = this.props.match.params.key; Lo saque de la destructuracion
    if (!('publicaciones_key' in this.props.usuariosReducer.usuarios[key])) {
      publicacionesTraerPorUsuario(key);
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1> Publicaciones de {}</h1>
      </div>
    );
  }
}
const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
  return {
    usuariosReducer,
    publicacionesReducer,
  };
};
const mapDispatchToProps = {
    usuariosTraerTodos,
    publicacionesTraerPorUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
