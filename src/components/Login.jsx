import { Container, Button } from "react-bootstrap"
import {BsDiscord} from 'react-icons/bs'
import { useAuth } from "../context/authContext"
import styled from "styled-components"
import { Navigate } from "react-router-dom";





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
           <div className="two-color-layout">
      <div className="left-color">
       
      </div>
      <div className="right-color">
      
      </div>
      <div className="form-container">
            <div className="titulo" style={{ color:'#481593'}}>
                <h2 className="fs-50">Bienvenido</h2>
            </div>
            <div className="subtitulo">
                <p>Por favor inicia sesion con tu cuenta de Discord</p>
            </div>
                
                
               
                <div className="d-grid gap-2 mt-5" >
                    <Button variant="secondary" size="lg"  onClick={logearse} style={{padding:'10px 50px', fontSize:'14px'}}>
                        Iniciar Sesion <BsDiscord/>
                    </Button>
     
                </div>
      </div>
    </div>
        </LoginWrapper>
      
    )


}

const LoginWrapper=styled.div`

.two-color-layout {
    display: flex;
    height: 100vh; 
    position: relative; 
  }
  
  .left-color {
    flex: 6; 
    background-color: #F7F7F7; 
    position: relative; 
  }
  
  .form-container {
    flex: 1; 
    background-color: white;
    position: absolute; 
    width: 450px;
    height:500px;
    top: 50%; 
    left: 55%;
    right: 0;
    transform: translateY(-50%); 
    display: flex;
    flex-direction:column;
    padding:90px 60px;
    justify-content:center;
    align-items:center;
    z-index: 1; 

    box-shadow:rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
    border:none;
      border-radius: 7px;
  }
  
  .right-color {
    flex: 3; 
    background-color: #EDEDED; 
    position: relative; 
  }
  
    
    


`

export default Login