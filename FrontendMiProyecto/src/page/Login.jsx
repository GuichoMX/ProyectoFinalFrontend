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
        // <section className="title">
        //     Login page
        //     <form style={{ display: "grid" }} onSubmit={handleLogin}>
        //         <label>
        //             Email:
        //             <input type="text" name="name" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        //         </label>
        //         <label>
        //             Contraseña:
        //             <input type="text" name="name" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        //         </label>
        //         <input style={{ width: "230px" }} type="submit" value="Submit" />
        //     </form>

        //     {error && `Error: ${error.message}`}
        // </section>

        <div class="main-login">
            <div class="contenedor-login">
                <div class="contenedor-form">
                    <img class="img-login" src={imgCandado} alt="imagen de candado" />
                    <h2>Iniciar Sesion</h2>
                    <form id="formulario-login" onSubmit={handleLogin}>
                        <input type="text" class="input-login" placeholder="Usuario" id="txt_usuario" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" class="input-login" placeholder="Password" id="txt_contrasena" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input class="checkbox-form" type="checkbox" id="checkid" />
                        <label for="checkid">Recuerdame</label>
                        <a class="contrasena-olvidada" href="#">Olvidaste tu contraseña?</a>
                        <input class="boton-login" id="btnSubmit" type="submit" value="Iniciar Sesion" />
                    </form>
                </div>
            </div>
        </div>

    )
} 