
// const Home = () => {
//   return (
//     <div className="text-6xl">
//       HOME
//     </div>
//   )
// }

// export default Home
// Importa Link desde react-router-dom
// import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";
const Home = () => {
  return (
    <div>
<NavBar/>
      <div className="text-6xl">
        HOME
      </div>
    

      {/* Botón para ir a la página de Contacto */}
      {/* <Link to="/contact">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
          Ir a Contacto
        </button>
      </Link> */}
    </div>
  )
}

export default Home;


