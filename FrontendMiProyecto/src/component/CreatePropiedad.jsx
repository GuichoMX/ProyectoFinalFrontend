import { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const createPropertyMutationGQL = gql`
mutation insertPropiedades($nombre:String, $direccion:String, $fecha_inicio:String, 
    $fecha_final:String, $max_personas:Int, $id_usuario:Int, $hecho:Int) {
        insertPropiedades(
input: {
nombre: $nombre
direccion: $direccion
fecha_inicio: $fecha_inicio
fecha_final: $fecha_final
max_personas: $max_personas
id_usuario: $id_usuario
hecho: $hecho
}
) {
    nombre
    direccion
    fecha_inicio
    fecha_final
    max_personas
    id_usuario
    hecho
}
}
`;

export const CreatePropiedad = () => {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [fecha_inicio, setFechaInicio] = useState("");
    const [fecha_final, setFechaFinal] = useState("");
    const [max_personas, setMaxPersonas] = useState("");
    const [id_usuario, setIdUsuario] = useState("");
    var [hecho, setHecho] = useState("");

    hecho = 0;


    const [mutateFunction, { data, loading, error }] = useMutation(createPropertyMutationGQL, {
        onError: (err) => {
            console.log("API error", err)
            localStorage.removeItem("token");
        },
    });


    const handleCreationProperty = async (e) => {
        e.preventDefault();
        mutateFunction({ variables: { nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho} });
        console.log({ variables: { nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario, hecho } });
    };


    return (

        <div className="main-login">
            <div className="contenedor-login">
                <div className="contenedor-form-propiedad">
                    <h2>Creando propiedad...</h2>
                    <form id="formulario-login" onSubmit={handleCreationProperty}>
                        <input type="text" className="input-login" placeholder="Nombre" id="txt_usuario" required="" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <input type="text" className="input-login" placeholder="Direccion" id="txt_usuario" required="" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                        <input type="text" className="input-login" placeholder="Fecha de inicio" id="txt_usuario" required="" value={fecha_inicio} onChange={(e) => setFechaInicio(e.target.value)} />
                        <input type="text" className="input-login" placeholder="Fecha de final" id="txt_usuario" required="" value={fecha_final} onChange={(e) => setFechaFinal(e.target.value)} />
                        <input type="text" className="input-login" placeholder="Máximo de personas" id="txt_usuario" required="" value={max_personas} onChange={(e) => setMaxPersonas(parseInt(e.target.value))} />
                        <input type="text" className="input-login" placeholder="Usuario asignado" id="txt_usuario" required="" value={id_usuario} onChange={(e) => setIdUsuario(parseInt(e.target.value))} />
                        <input type="text" className="input-login" id="txt_usuario" required="" value={(hecho === 0) ? "Ocupado" : "Disponible" } onSubmit={(e) => setHecho(parseInt(0))} disabled/>
                        <input className="boton-create-propiedad" id="btnSubmit" type="submit" value="Registrar" />
                    </form>

                    {data &&
                        <small>Propiedad {data.insertPropiedades.nombre} registrado con éxito <Link onClick={() => {window.location.href="/propiedades"}}>Ver Propiedades</Link></small>
                    }

                    {error &&
                        <small>error al tratar de registrar a {nombre}</small>
                    }
                </div>
            </div>
        </div>
    )
} 