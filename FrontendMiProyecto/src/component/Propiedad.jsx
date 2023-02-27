import Casa from "../assets/img/Propiedades/casaimgPrueba.png"

export const Propiedad = (props) => {
    const { id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho } = props.data
    const estado = (hecho == 1) ? true : false;
    return (

        <div>
            <div className="contenido-propiedades">
                <div className="casa-img">
                    <img src={Casa} alt="Esta es una imagen de una casa" />
                </div>

                <div className="casa-contenido">
                    <div className="contenido-izquierda">
                        <form action="">
                            <label htmlFor="inNombre">Nombre</label>
                            <input id="inNombre" type="text" placeholder={nombre} disabled />
                            <label htmlFor="inDireccion">Dirección</label>
                            <input id="inDireccion" type="text" placeholder={direccion} disabled />
                        </form>
                        <div className="espacio">
                            <a href=""></a>
                        </div>
                    </div>

                    <div className="contenido-derecha">
                        <form action="">
                            <label htmlFor="inNombre">Usuario</label>
                            <input id="inUsuario" type="text" placeholder={id_usuario} disabled />
                            <label htmlFor="inDireccion">Disponibilidad</label>
                            <input id="inDireccion" type="text" placeholder={estado ? "Ocupado" : "Disponible"} disabled />
                        </form>
                        <div className="btnEdicion">
                            <button className="boton" id="btnsubmit" type="submit"
                                onClick={() => {
                                    navigate(`/properties/${props.id}`);
                                }}>Ver más</button>
                            <button className="boton" id="btnsubmit2" type="submit"
                                onClick={() => {
                                    fetch(`${baseURL}/properties/${props.id}`, { method: "DELETE" })
                                        .then(() => {
                                            props.addProperties({ tipo: "deleteProperty", id: props.id })
                                        })
                                }}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
            <input
                type="checkbox"
                checked={props.hecho}
                onChange={() => {
                    fetch(`${baseURL}/properties/${props.id}`,
                        {
                            method: "PATCH",
                            headers: {
                                'Content-Type': "application/json"
                            },
                            body: JSON.stringify({ hecho: !props.hecho })
                            //body: props.hecho ? JSON.stringify({ hecho: "Disponible" }) : JSON.stringify({ hecho: "Ocupado" })
                        }
                    )
                        .then(response => response.json())
                        .then(property => {
                            props.addProperties({ tipo: !property.hecho ? "quitarHecho" : "ponerHecho", id: props.id });
                        })
                }}
            />
            <label htmlFor="inNombre">¿Esta ocupado?</label>
        </div>
    )
} 