import React from "react";
import HeadTabla from "./HeadTabla";
import BodyTabla from "./BodyTabla";

function Tabla(props) {
  const { datosPersonas, eliminarPersona } = props;
  return (
    <table className="table">
      <HeadTabla />
      <BodyTabla datosPersonas={datosPersonas} eliminarPersona={eliminarPersona} />
    </table>
  );
}

export default Tabla;