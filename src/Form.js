import React, { useState } from "react";

function Form(props) {
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
  });

  const gestionarCambio = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const enviarFormulario = () => {
    props.enviarFormulario(formValues);
    setFormValues({
      nombre: "",
      apellido: "",
    });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          className="form-control"
          value={formValues.nombre}
          onChange={gestionarCambio}
        />
      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          className="form-control"
          value={formValues.apellido}
          onChange={gestionarCambio}
        />
      </div>
      <input type="button" value="Enviar" onClick={enviarFormulario} />
    </form>
  );
}

export default Form;