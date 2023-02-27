import { gql, useQuery } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthService } from '../auth'

const GET_HUESPED = gql`
query GetHuesped {
getHuesped {
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


export const DetailsHuesped = () => {
const { id_usuario } = useParams();
console.log(id_usuario)

  const navigate = useNavigate()

  const { loading, error, data } = useQuery([GET_HUESPED, id_usuario], {
    onSuccess:(data, payload) => {
      console.log(data)
    },
    onError: (err) => {
      switch (err.message) {
        case 'jwt expired':
          AuthService.logout()
          navigate('/login')
          window.location.reload()
          break;
        default:
          break;
      }
    }
  })

  return (
    <>
        <main class="main">
            <div class="hero-propiedades">
                <div class="hero-contenedor">
                    <h1>{nombres}</h1>
                </div>
            </div>
            <div id="usuarios" class="usuarios">
                <div class="usuarios-caja">
                    <div class="propiedades-params-user-detail">
                        <div class="contenido-propiedades-user-detail">
                                <div class="contenido-user-detail">
                                    <form action="">
                                        <label for="inNombre">Nombre:</label>
                                        <input id="inNombre" type="text" placeholder="" disabled />
                                        <label for="inDireccion">Propiedad asignada:</label>
                                        <input id="inDireccion" type="text" placeholder="" disabled />
                                        <label for="inNombre">Age:</label>
                                        <input id="inNombre" type="text" placeholder="" disabled />
                                        <label for="inNombre">State:</label>
                                        <input id="inNombre" type="text" placeholder="" disabled />
                                        <label for="inNombre">City:</label>
                                        <input id="inNombre" type="text" placeholder="" disabled />
                                        <label for="inNombre">Cellphone:</label>
                                        <input id="inNombre" type="text" placeholder="" disabled />
                                        <label for="inNombre">Reference number:</label>
                                        <input id="inNombre" type="text" placeholder="" disabled />
                                    </form>
                                </div>
                        </div>
                        <button><Link to="/users">Back to Users</Link></button>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
} 