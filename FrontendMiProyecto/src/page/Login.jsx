//Informaciòn para login
// Usuario: escobedotrenado@hotmail.com
// Contraseña: 123

import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import imgCandado  from "../assets/img/candado.png"

const loginMutationGQL = gql`
mutation signIn($email: String!, $password: String!) {
signIn(email: $email, password: $password)
}
`;

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const [mutateFunction, { data, loading, error }] = useMutation(loginMutationGQL, {
        onCompleted: (data) => {
            localStorage.setItem("token", data.signIn);
            navigate("/propiedades")
            window.location.reload()
        },
        onError: (err) => console.log("API error", err),
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        mutateFunction({ variables: { email, password } });
    };

    if (loading) return 'Submitting...';

    return (
        <div className="main-login">
            <div className="contenedor-login">
                <div className="contenedor-form">
                    <img className="img-login" src={imgCandado} alt="imagen de candado" />
                    <h2>Iniciar Sesion</h2>
                    <form id="formulario-login" onSubmit={handleLogin}>
                        <input type="text" className="input-login" placeholder="Usuario" id="txt_usuario" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" className="input-login" placeholder="Password" id="txt_contrasena" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input className="checkbox-form" type="checkbox" id="checkid" />
                        <label htmlFor="checkid">Recuerdame</label>
                        <a className="contrasena-olvidada" href="#">Olvidaste tu contraseña?</a>
                        <input className="boton-login" id="btnSubmit" type="submit" value="Iniciar Sesion" />
                    </form>
                </div>
            </div>
        </div>

    )
} 