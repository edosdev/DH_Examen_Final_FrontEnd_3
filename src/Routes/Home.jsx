import { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal)
  const [dentistas, setDentistas] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDentistas(state.data)
  }, [state.data])

  useEffect(() => {

    if (dentistas.length > 0) {
      setLoading(false)
    }

  }, [dentistas])


  return (
    <main className="fixed-grid has-4-cols" >
      <h1 className='title'>Lista de Doctores</h1>
      <div className="grid is-column-gap-2.5">
        {loading ? (
          <div className='has-text-centered'>
          <span class="loader"></span>
        </div>) : (<>
          {dentistas.map((e) => {
            return <Card key={e.id} {...e} />
          })}</>)}
      </div>
    </main>
  )
}

export default Home