import userMalePic from "../assets/img/Usuarios/user_male.png"
import userFemalePic from "../assets/img/Usuarios/user_female.png"
import { useNavigate } from "react-router-dom";

export const Huesped = (props) => {
  const navigate = useNavigate();
    const { id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia , genero, propiedadAsignada } = props.data
    const fullName = nombres + " " + apellidoP + " " + apellidoM
    return (
        <div>
        <div className="contenido-propiedades">
          <div className="usuario-img">
            <img src={genero === "Masculino" ? userMalePic : userFemalePic}  alt="Esta es una imagen de un usuario" href="" />
          </div>
  
          <div className="casa-contenido">
            <div className="contenido-derecha">
              <form action="">
                <label htmlFor="inNombre">Nombre</label>
                <input id="inNombre" type="text" placeholder={fullName} disabled/>
                  <label htmlFor="inDireccion">Propiedad</label>
                  <input id="inDireccion" type="text" placeholder={propiedadAsignada} disabled/>
                  </form>
                  <div className="btnEdicion">
                  <button className="boton" id="btnsubmit" type="submit"
                            onClick={() => {
                              navigate(`/huespedes/${id_usuario}`);
                            }}>Ver más</button>
                            <button className="boton" id="btnsubmit2" type="submit"
                            onClick={() => {
                              fetch(`${baseURL}/users/${props.id}`, { method: "DELETE" })
                                .then(() => {
                                  props.addUsers({ tipo: "deleteUser", id: props.id })
                                })
                            }}>Eliminar</button>
  
                  </div>
                </div>
            </div>
          </div>
      </div>


    )
} 