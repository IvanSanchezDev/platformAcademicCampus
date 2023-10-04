import { Container, Button } from "react-bootstrap"
import {BsDiscord} from 'react-icons/bs'
import { useAuth } from "../context/authContext"
import styled from "styled-components"
import { Navigate } from "react-router-dom";
import { Layout } from "./Layout";



const Login=()=>{
    const {isAuthenticated, saveUser}=useAuth()

   
    const logearse=async()=>{
        const win = window.open(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/auth/login`, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        win.focus();
        window.addEventListener('message', async(event) => {
            if (event.origin === `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}`) {               
            const userData = event.data;
            if (userData) {
              saveUser(userData);
            }
            win.close();          
            }
            
        });
        
    }

    if (isAuthenticated) {    
        return <Navigate to="/home" />;
    }


    return(
        <LoginWrapper >
            
            <Container className="loginContainer">
                <h2>Inicia con Discord</h2>
                <BsDiscord className="fs-50"/>
                <div className="d-grid">
                    <Button size="lg" onClick={logearse}>Inicia Sesion</Button>        

                </div>
            </Container>
        </LoginWrapper>
      
    )


}

const LoginWrapper=styled.div`

background-color:#481593;
height: 100vh;

.loginContainer{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 450px;
    border: 1px solid;
    margin-top: 20rem;
    padding:10px;
    background:#FFFFFF;
    height:40vh;
    border-radius: 7px;
    

    button{
        background-color:#481593;
        border:none;
    }
}
    
    


`

export default Login