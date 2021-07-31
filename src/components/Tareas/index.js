import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import editIcon from '../../assets/edit_black_24dp.svg';
import deleteIcon from '../../assets/delete_black_24dp.svg';

import * as tareasActions from "../../actions/tareasActions";

//Lo destructuro
const { traerTodas, cambioCheck, eliminar } = tareasActions;

class Tareas extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.tareas).length) {
      this.props.traerTodas();
    }
  }
  componentDidUpdate() {
    const { tareas, cargando, traerTodas } = this.props;

    if (!Object.keys(tareas).length && !cargando) {
      traerTodas();
    }
  }

  mostrarContenido = () => {
    const { tareas, cargando, error } = this.props;
    if (cargando) {
      return <Spinner />;
    }
    if (error) {
      return <Fatal mensaje={error.mensaje} />;
    }
    return Object.keys(tareas).map((usu_id) => (
      <div className="tasks-container" key={usu_id}>
        <h2>Usuario {usu_id}</h2>
        <div className="list-container">{this.ponerTareas(usu_id)}</div>
      </div>
    ));
  };
  ponerTareas = (usu_id) => {
    const { tareas, cambioCheck, eliminar } = this.props;
    const por_usuario = {
      ...tareas[usu_id],
    };

    return Object.keys(por_usuario).map((tar_id) => (
      <div className="checkbox-container"  key={tar_id}>
        <input
          type="checkbox"
          defaultChecked={por_usuario[tar_id].completed}
          onChange={() => cambioCheck(usu_id, tar_id)}
        />
        <span className="checkboxtexto">
        {por_usuario[tar_id].title}
        </span>
        <Link to={`/tareas/guardar/${usu_id}/${tar_id}`}>
            <img src={editIcon} alt="editIcon"></img>
        </Link>
        <Link onClick={() => eliminar(tar_id)}>
            <img src={deleteIcon} alt="editIcon"></img>
        </Link>
      </div>
    ));
  };
  render() {
    return (
      <div className="main-container">
        <Link to="/tareas/guardar">
          <button className="addTaskButton">
              Add new task...
          </button>
        </Link>

        {this.mostrarContenido()}
      </div>
    );
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

const mapDispatchToProps = {
  traerTodas,
  cambioCheck,
  eliminar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tareas);
