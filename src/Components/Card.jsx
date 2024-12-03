import React from "react";

const Card = (props) => {
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
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <h3>Nombre {props.name}</h3>
      <h4>Usuario {props.username}</h4>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Añadir Favorito</button>
    </div>
  );
};

export default Card;
