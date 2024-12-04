import { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal)
  const [dentistas, setDentistas] = useState([])
  
  useEffect(()=> {
    setDentistas(state.data)
  }, [state.data])


  return (
    <main className="" >
      <h1>Lista de Doctores</h1>
      <div className='card-grid'>
        {dentistas.map((e) => {
          return <Card key={e.id} {...e} />
        })}
      </div>
    </main>
  )
}

export default Home