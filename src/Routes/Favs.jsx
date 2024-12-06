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
    <main className="fixed-grid has-4-cols">
      <h1 className="title">Doctores Favoritos</h1>
      <div className="grid is-column-gap-2.5">
        
        {favs.length > 0 ? ( 

          favs.map((e) => (
            <Card key={e.id} {...e} />
          ))

        ) : (

          <h2>No hay favoritos</h2>

        )}
      </div>
      
    </main>
  );
};

export default Favs;
