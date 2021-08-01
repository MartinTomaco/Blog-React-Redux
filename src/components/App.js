import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./General/Header";
import Circle from "./General/Circle";
import Footer from "./General/Footer";
import Usuarios from "./Usuarios";
import Publicaciones from "./Publicaciones";
import Tareas from "./Tareas";
import TareasGuardar from "./Tareas/Guardar";


const App = () => (
  <BrowserRouter>
    <div className="total-container">
      <Header />
      <Circle />
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/tareas" component={Tareas} />
      <Route exact path="/publicaciones/:key" component={Publicaciones} />
      <Route exact path="/tareas/guardar" component={TareasGuardar} />
      <Route exact path="/tareas/guardar/:usu_id/:tar_id" component={TareasGuardar} />
      <Footer />
    </div>
  </BrowserRouter>
);
export default App;
