import { gql, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '../auth'
import { Huesped } from '../component/Huesped'
import { Link } from "react-router-dom";

const GET_HUESPEDES = gql`
query GetHuespedes {
getAllHuespedes {
id_usuario
nombres
apellidoP
apellidoM
edad
pais
ciudad
num_contacto
num_referencia
genero,
propiedadAsignada
}
}
`;


export const Huespedes = () => {

  const navigate = useNavigate()

  const { loading, error, data } = useQuery(GET_HUESPEDES, {
    onError: (err) => {
      switch (err.message) {
        case 'jwt expired':
          AuthService.logout()
          navigate('/login')
          window.location.reload()
          break;
        // TODO: resolver otros casos de error
        default:
          break;
      }
    }
  })

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (

    <ul className="no-bullets">
      <main className="main">
        <div className="hero-propiedades">
          <div className="hero-contenedor">
            <h1>Mis Usuarios</h1>
          </div>
        </div>
        <div id="usuarios" className="usuarios">
          <div className="usuarios-caja">
          <button><Link to="/createhuespedes">Create Huesped</Link></button>
            <div className="propiedades-params">
              {
                data.getAllHuespedes.map((huesped) => <Huesped key={huesped.id_usuario} data={huesped} />)
              }
            </div>
          </div>
        </div>
      </main>
    </ul >

  )
} 