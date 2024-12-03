import { Link } from "react-router-dom";
import { useContext } from 'react'
import { ContextGlobal } from "./utils/global.context"; // Import ContextGlobal, not ContextProvider
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/favs">Favs</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    <button onClick={() => dispatch({ type: "CHANGE_THEME", payload: state.theme === "dark" ? "light" : "dark" })}>
    {state.theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav >
  )
}

export default Navbar