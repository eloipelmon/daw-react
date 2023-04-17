import React from "react";

const BodyTabla = (props) => {
  const { datosPersonas, eliminarPersona } = props;

  const filas = datosPersonas.map((fila, indice) => (
    <tr key={indice}>
      <td>{fila.nombre}</td>
      <td>{fila.apellido}</td>
      <td>
        <button onClick={() => eliminarPersona(indice)}>Eliminar</button>
      </td>
    </tr>
  ));

  return <tbody>{filas}</tbody>;
};

export default BodyTabla;