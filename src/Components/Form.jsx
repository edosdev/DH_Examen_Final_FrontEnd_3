import React, { useState } from "react";


const Form = () => {
  const [form, setForm] = useState({
    nameComplete: "",
    email: "",
  })

  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <label>Nombre Completo</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <button type="submit"> Enviar</button>
      </form>
    </div>
  );
};

export default Form;
