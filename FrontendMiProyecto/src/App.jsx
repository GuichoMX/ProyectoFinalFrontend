import { Route, Routes, useParams } from "react-router-dom"
import { Navbar } from "./component/Navbar"
import { Propiedades } from "./page/Propiedades"
import { Huespedes } from "./page/Huespedes"
import { Home } from "./page/Home"
import { Login } from "./page/Login"
import { Register } from "./page/Register"
import { gql, useQuery } from '@apollo/client'
import { DetailsHuesped } from "./component/DetailsHuesped"
import { CreateHuesped } from "./component/CreateHuesped"
import { CreatePropiedad } from "./component/CreatePropiedad"



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

export const App = () => {


  return (
    <main>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/propiedades" element={<Propiedades />} />
        <Route path="/createpropiedad" element={<CreatePropiedad />} />
        <Route path="/huespedes" element={<Huespedes />} />
        <Route path="/createhuespedes" element={<CreateHuesped />} />
        <Route path="/huespedes/:id_usuario" element={<DetailsHuesped/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  )
} 