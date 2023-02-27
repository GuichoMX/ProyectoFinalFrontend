import { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const signupMutationGQL = gql`
mutation signUp($name: String, $lastname: String, $email: String!, $password: String!) {
signUp(
input: {
name: $name
lastname: $lastname
email: $email
password: $password
}
) {
name
lastname
email
}
}
`;

export const Register = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [mutateFunction, { data, loading, error }] = useMutation(signupMutationGQL, {
        onError: (err) => {
            console.log("API error", err)
            localStorage.removeItem("token");
        },
    });

    const handleSignup = async (e) => {
        e.preventDefault();
        mutateFunction({ variables: { name, lastname, email, password } });
    };

    return (

        <div className="main-login">
            <div className="contenedor-login">
                <div className="contenedor-form">
                    <h2>Creando usuario...</h2>
                    <form id="formulario-login" onSubmit={handleSignup}>
                        <input type="text" className="input-login" placeholder="Nombre" id="txt_usuario" required="" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="lastname" className="input-login" placeholder="Apellidos" id="txt_usuario2" required="" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        <input type="address" className="input-login" placeholder="Correo" id="txt_usuario3" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="input-login" placeholder="Password" id="txt_contrasena" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input className="checkbox-form" type="checkbox" id="checkid" />
                        <label htmlFor="checkid">Mostrar contraseña</label>
                        <input className="boton-login" id="btnSubmit" type="submit" value="Registrar" />
                    </form>

                    {data &&
                        <small>Usuario {data.signUp.email} registrado con éxito <Link to={"/login"}>Ingresar</Link></small>
                    }

                    {error &&
                        <small>error al tratar de registrar a {email}</small>
                    }
                </div>
            </div>
        </div>


        // <div>
        //     <form onSubmit={handleSignup}>
        //         <h3>Register</h3>
        //         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        //         <input type="lastname" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        //         <input type="address" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        //         <button type="submit">Register</button>
        //     </form>

        // {data &&
        //     <small>Usuario {data.signUp.email} registrado con éxito <Link to={"/login"}>Ingresar</Link></small>
        // }

        // {error &&
        //     <small>error al tratar de registrar a {email}</small>
        // }
        // </div>
    )
} 