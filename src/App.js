import React, { useState } from "react";
import Tabla from "./Tabla";
import Form from "./Form";

function App() {
  const [personas, setPersonas] = useState([]);

  const enviarFormulario = (persona) => {
    setPersonas([...personas, persona]);
  };

  const eliminarPersona = (indice) => {
    setPersonas(personas.filter((persona, i) => i !== indice));
  };

  return (
    <div className="container">
      <h1>2DAW: Testeando React by Eloi Pellin</h1>
      <Tabla datosPersonas={personas} eliminarPersona={eliminarPersona} />
      <Form enviarFormulario={enviarFormulario} />
    </div>
  );
}

export default App;