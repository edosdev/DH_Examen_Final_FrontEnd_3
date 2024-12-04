import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams();
  const [dentistas, setDentistas] = useState({})
  const [loading, setLoading] = useState(true);
  
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(()=>{
    axios(url).then(res => {
      setDentistas(res.data)
      setLoading(false)
    }).catch(err => {
      console.error(err)
      setLoading(false)
    })
  }, [])
  
//  console.log(dentistas)
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      {loading ? (<h1>Cargando...</h1>) : (
        <div className='detail'>
          <img src="https://drfootpain.com/wp-content/uploads/2023/08/doctor-placeholder-1.png" alt={dentistas.name} />
          <h1>{dentistas.name} </h1>
          <p>{dentistas.email}</p>
          <p>{dentistas.phone}</p>
          <p>{dentistas.website}</p>
        </div>
      )}
    </>
  )
}

export default Detail