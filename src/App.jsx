import { Link } from "react-router-dom"
import CustomRoutes from "./routes/CustomRoutes"

function App() {

  return (
    <>
      <h1 className='pokedex-heading'>
        <Link to='/'> Pokedex </Link>
      </h1>
      <CustomRoutes />
    </>
  )
}

export default App
