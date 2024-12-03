import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
 const [favs, setFavs] = useState([]);

 useEffect(() => {
  const obtenerFavoritos = () => {
    const favoritosGuardados = localStorage.getItem("Favoritos");
    return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
  };
  setFavs(obtenerFavoritos());
 }, [])



  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
       {favs.map((e)=>{
         return  <Card key={e.id} {...e} />
       })}
      </div>
    </>
  );
};

export default Favs;
