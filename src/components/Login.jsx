import { Container, Button } from "react-bootstrap"
import {BsDiscord} from 'react-icons/bs'

import styled from "styled-components"




const Login=()=>{

    const logearse=async()=>{
        const win = window.open('http://localhost:1234/auth/login', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        win.focus();
    }

    return(
        <LoginWrapper>

        <Container className="loginContainer">
            <h2>Inicia con Discord</h2>
            <BsDiscord className="fs-50"/>
            <Button onClick={logearse}>Inicia Sesion</Button>        
       </Container>
        </LoginWrapper>
      
    )


}

const LoginWrapper=styled.div`

.loginContainer{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 500px;
    border: 1px solid;
    margin-top: 20rem;
    padding:10px;
    box-shadow:rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
}
    
    


`

export default Login