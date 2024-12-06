import React from "react";
import { Link, useLocation } from "react-router-dom";

const Card = (props) => {
  const ubicacion = useLocation()
  // console.log(ubicacion)

  const addFav = () => {
    let favoritos = [];
    const favoritosGuardado = localStorage.getItem("Favoritos");

    if (favoritosGuardado) {

      favoritos = JSON.parse(favoritosGuardado);

      for (const obj of favoritos) {
        if (obj.id === props.id) {
          return console.log("El dentista en esta ya esta en tu lista de favorito")
        }
      }
    } 
    //  const existe = favoritos.some(obj => obj.id === props.id);
    {/* if (existe) return true */}  {/* Con esto forma mas simplificada podemos ver si exite el dentista en la lista de favoritos */}
    
      favoritos = [...favoritos, props];
      localStorage.setItem("Favoritos", JSON.stringify(favoritos));
  };

  return (
    <div className="card cell">
      {/* En cada card deberan mostrar en name - username y el id */ }
      <Link to={`/dentista/${props.id}`} key={props.id}>
      <figure figure class="image" >
        <img src="https://drfootpain.com/wp-content/uploads/2023/08/doctor-placeholder-1.png" alt={props.name} />
      </figure >
    
      <div className="media-content m-5">
        <p className="title is-6">Nombre {props.name}</p>
        <p className="subtitle is-6">Usuario: {props.username}</p>
      </div>
    </Link>
  {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */ }
      <div className="buttons container is-fullhd is-justify-content-center	">
    {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    {ubicacion.pathname === "/favs" ? null : <button className="button is-primary" onClick={addFav}>Agregar a favoritos</button>}
  </div>
      </div >
  );
};

export default Card;
