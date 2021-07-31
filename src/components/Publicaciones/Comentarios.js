import React from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";

const Comentarios = (props) => {
  if (props.com_error) {
    return <Fatal mensaje={props.com_error} />;
  }
  if (props.com_cargando && !props.comentarios.length) {
    return <Spinner />;
  }

  const ponerComentarios = () =>
    props.comentarios.map((comentario, key) => (
      <li className="comment" key={key}>
        <b>
          <u>{comentario.email}</u>
        </b>
        <br />
        <span >
        {comentario.body}
        </span>
      </li>
    ));
  return <ul>{ponerComentarios()}</ul>;
};
const mapStateToProps = ({ publicacionesReducer }) => publicacionesReducer;

export default connect(mapStateToProps, null)(Comentarios);
