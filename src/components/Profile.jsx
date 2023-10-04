import { useAuth } from "../context/authContext"
import styled from "styled-components"
import { Layout } from "./Layout"
import Container from 'react-bootstrap/Container';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react";
import CardCourse from "./CardCourse";


export const Profile=()=>{

    const {user}=useAuth()
    const [misCursos, setMisCursos]=useState([])
    const [isLoading, setIsLoading] = useState(true); 


    useEffect(() => {
        (async () => {
          try {
            if(user){
                const response = await fetch(
                    `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/api/curso/traerCursosInscrito?usuario=${user.nombre_usuario}`,
                    {
                      method: "GET",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      credentials: 'include',
                    }
                  );
                  const result = await response.json();
          
                  setMisCursos(result.data);
                  setIsLoading(false); 
            }
            
          } catch (error) {
            console.log(error);
            setIsLoading(false); 
          }
        })();
      }, []);
    

    return(
       <ProfileWrapper>
            <Layout />
            <Container className="flex flex-column"  fluid>
            <div className="perfil">
                <Avatar alt="Remy Sharp" src={`https://cdn.discordapp.com/avatars/${user.discord_id}/${user.imagen_perfil}.png`} sx={{ width: 70, height: 70 }}/>
                <h2 className="fs-40 titulo fw-7">{user.nombre_usuario}</h2>
                <div className="fs-18 fw-4  sub text">{user.correo_electronico}</div>
            </div>
          <div>
            
            <div className="containerCards text-center">
            {isLoading ? (
              <div>Cargando...</div> // Mostrar un indicador de carga
            ) : (
              <CardCourse listCourse={misCursos} />
            )}
          </div>
          </div>

            </Container>
       </ProfileWrapper>
    )
}

export const ProfileWrapper=styled.div`

background-color:#EDEDED;
min-height: 100vh;

.perfil {
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-top:10rem;;
}

@media (max-width: 767px) { 

  
  
  .containerCards img {
    max-width: 90%; 
   
  }

  .containerCards card {
    margin-right:-30px;
   
  }
}





`;