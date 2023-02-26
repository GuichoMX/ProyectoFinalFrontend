import Casa from "../assets/img/Propiedades/casaimgPrueba.png"

export const Propiedad = (props) => {
    const { id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho } = props.data
    const estado = (hecho == 1) ? true : false;
    return (

        <div>
            <div class="contenido-propiedades">
                <div class="casa-img">
                    <img src={Casa} alt="Esta es una imagen de una casa" />
                </div>

                <div class="casa-contenido">
                    <div class="contenido-izquierda">
                        <form action="">
                            <label for="inNombre">Nombre</label>
                            <input id="inNombre" type="text" placeholder={nombre} disabled />
                            <label for="inDireccion">Dirección</label>
                            <input id="inDireccion" type="text" placeholder={direccion} disabled />
                        </form>
                        <div class="espacio">
                            <a href=""></a>
                        </div>
                    </div>

                    <div class="contenido-derecha">
                        <form action="">
                            <label for="inNombre">Usuario</label>
                            <input id="inUsuario" type="text" placeholder={id_usuario} disabled />
                            <label for="inDireccion">Disponibilidad</label>
                            <input id="inDireccion" type="text" placeholder={estado ? "Ocupado" : "Disponible"} disabled />
                        </form>
                        <div class="btnEdicion">
                            <button class="boton" id="btnsubmit" type="submit"
                                onClick={() => {
                                    navigate(`/properties/${props.id}`);
                                }}>Ver más</button>
                            <button class="boton" id="btnsubmit2" type="submit"
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
            <label for="inNombre">¿Esta ocupado?</label>
        </div>



        // <div className="card" style={{ width: '20rem' }}>
        //     <img className="card-img-top" src="https://via.placeholder.com/300x180?text=Propiedad image" alt="Propiedad image" />
        //     <div className="card-body">
        //         <h3 className="card-title">{nombre}</h3>
        //         <p className="card-text">Direccion: {direccion}</p>
        //         <p className="card-text">Entrada: {fecha_inicio}</p>
        //         <p className="card-text">Salida: {fecha_final}</p>
        //         <p className="card-text">Máximo de personas: {max_personas}</p>
        //         <p className="card-text">Usuario: {id_usuario}</p>
        //     </div>
        // </div>
    )
} 