import React, { useState } from "react";


const Form = () => {
  const [form, setForm] = useState({
    nameComplete: "",
    email: "",
  })
  const [show, setShow] = useState(false)
  const [errors, setErrors] = useState(false)
  const handleSummit = (e) => {
    e.preventDefault();

    const reGex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValid = reGex.test(form.email) && form.nameComplete.length > 0;


    setErrors(!isValid)
    setShow(isValid)

    if (isValid) {
      console.log("datos enviados", form);
    }
  }
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form onSubmit={handleSummit}>
        <label>Nombre Completo</label>
        <input class="input" type="text" value={form.nameComplete} onChange={e => setForm({ ...form, nameComplete: e.target.value })} />
        <label>Email</label>
        <input class="input" type="text" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <button class="button is-primary " type="submit"> Enviar</button>
        <div className="mensajes">
          {errors ?
            (
              <div class="notification is-danger">
                **Por favor verifique su información nuevamente**
              </div>
            )

            : null}

          {show ?
            (
              <div class="notification is-success">
                **Gracias <b>{form.nameComplete}</b>, te contactaremos cuando antes vía mail**
              </div>
            )
            : null}
        </div>
      </form>

    </div>
  );
};

export default Form;
