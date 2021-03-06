import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Tabla = (props) => {
  const ponerFilas = () =>
    props.usuarios.map((usuario, key) => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
        <td>
          <Link to= {`/publicaciones/${key}`}>
            <div className="eye-solid3 icon"></div>
          </Link>
        </td>
      </tr>
    ));

  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Name</th>
          <th>e-mail</th>
          <th>Page</th>
        </tr>
      </thead>
      <tbody>{ponerFilas()}</tbody>
    </table>
  );
};
const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};
export default connect(mapStateToProps, null)(Tabla);
