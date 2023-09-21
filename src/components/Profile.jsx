import { useAuth } from "../context/authContext"


export const Profile=()=>{

    const {user}=useAuth()
    console.log(user);

    return(
        <h1>Bienvenido {user.data.nombre_usuario}</h1>
    )
}