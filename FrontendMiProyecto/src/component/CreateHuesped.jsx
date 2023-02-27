import { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const createUserMutationGQL = gql`
mutation insertHuespedes($nombres: String, $apellidoP: String, $apellidoM: String, $edad: Int, $pais: String,
     $ciudad: String, $num_contacto: String, $num_referencia: String, $genero: String, $propiedadAsignada: String) {
        insertHuespedes(
input: {
nombres: $nombres
apellidoP: $apellidoP
apellidoM: $apellidoM
edad: $edad
pais: $pais
ciudad: $ciudad
num_contacto: $num_contacto
num_referencia: $num_referencia
genero: $genero
propiedadAsignada: $propiedadAsignada
}
) {
    nombres
    apellidoP
    apellidoM
    edad
    pais
    ciudad
    num_contacto
    num_referencia
    genero
    propiedadAsignada
}
}
`;

export const CreateHuesped = () => {
    const [nombres, setNombres] = useState("");
    const [apellidoP, setApellidoP] = useState("");
    const [apellidoM, setApellidoM] = useState("");
    const [edad, setEdad] = useState("");
    const [pais, setPais] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [num_contacto, setNumContacto] = useState("");
    const [num_referencia, setNumReferencia] = useState("");
    const [genero, setGenero] = useState("");
    const [propiedadAsignada, setPropiedadAsignada] = useState("");

    
    const [mutateFunction, { data, loading, error }] = useMutation(createUserMutationGQL, {
        onError: (err) => {
            console.log("API error", err)
            localStorage.removeItem("token");
        },
    });


    const handleCreationUser = async (e) => {
        e.preventDefault();
        mutateFunction({ variables: { nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia, genero, propiedadAsignada } });
        console.log({ variables: { nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia, genero, propiedadAsignada } });
    };


    return (

        <div className="main-login">
            <div className="contenedor-login">
                <div className="contenedor-form-huesped">
                    <h2>Creando usuario...</h2>
                    <form id="formulario-login" onSubmit={handleCreationUser}>
                        <input type="text" className="input-login" placeholder="Nombres" id="txt_usuario" required="" value={nombres} onChange={(e) => setNombres(e.target.value)} />
                        <input type="text" className="input-login" placeholder="Apellido Paterno" id="txt_usuario" required="" value={apellidoP} onChange={(e) => setApellidoP(e.target.value)} />
                        <input type="text" className="input-login" placeholder="Apellido Materno" id="txt_usuario" required="" value={apellidoM} onChange={(e) => setApellidoM(e.target.value)} />
                        <input type="text" className="input-login" placeholder="Edad" id="txt_usuario" required="" value={edad} onChange={(e) => setEdad(parseInt(e.target.value))} />
                        <input type="text" className="input-login" placeholder="Pais" id="txt_usuario" required="" value={pais} onChange={(e) => setPais(e.target.value)} />
                        <input type="text" className="input-login" placeholder="Ciudad" id="txt_usuario" required="" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                        <input type="text" className="input-login" placeholder="Número de contacto" id="txt_usuario" required="" value={num_contacto} onChange={(e) => setNumContacto(e.target.value)} />
                        <input type="text" className="input-login" placeholder="Número de referencia" id="txt_usuario" required="" value={num_referencia} onChange={(e) => setNumReferencia(e.target.value)} />
                        <select name="gender" className="user-gender" value={genero} onClick={(e) => setGenero(e.target.value)}>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                        </select>
                        <input type="text" className="input-login" placeholder="Propiedad asignada" id="txt_usuario" required="" value={propiedadAsignada} onChange={(e) => setPropiedadAsignada(e.target.value)} />
                        <input className="boton-create-huesped" id="btnSubmit" type="submit" value="Registrar" />
                    </form>

                    {data &&
                        <small>Huésped {data.insertHuespedes.nombres} registrado con éxito <Link onClick={() => {window.location.href="/huespedes"}}>Ver Huéspedes</Link></small>
                    }

                    {error &&
                        <small>error al tratar de registrar a {nombres}</small>
                    }
                </div>
            </div>
        </div>
    )
} 