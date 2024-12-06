import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from 'react'
import { ContextGlobal } from "./utils/global.context"; // Import ContextGlobal, not ContextProvider
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)
  console.log(state.theme)
  const themeButtonRef = useRef(null); // Creo una Referencia del Boton

  useEffect(() => {
    if (themeButtonRef.current) { 
      if (state.theme === "dark") {
        themeButtonRef.current.classList.add("is-light");
        themeButtonRef.current.classList.remove("is-dark");
      } else { // Add the "else" to handle the light theme
        themeButtonRef.current.classList.add("is-dark");
        themeButtonRef.current.classList.remove("is-light");
      }
    }
  }, [state.theme]); 

  return (
    <>
      <nav class="navbar container py-4 " role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="176" height="40" fill="none" viewBox="0 0 176 40"><path fill="var(--bulma-navbar-item-color)" fill-rule="evenodd" d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z" clip-rule="evenodd"></path><path fill="#283841" d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>

          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/contacto">Contacto</Link>
          <Link className="navbar-item" to="/favs">Favs</Link>
        </div>

        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button ref={themeButtonRef} className="button is-primary" onClick={() => dispatch({ type: "CHANGE_THEME", payload: state.theme === "dark" ? "light" : "dark" })}>
          {state.theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </nav></>
  )
}

export default Navbar