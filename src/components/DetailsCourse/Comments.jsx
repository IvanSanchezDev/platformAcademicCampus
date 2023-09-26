import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { io } from "socket.io-client";
import { useAuth } from '../../context/authContext';

const socket = io('/');


export const Comments=({nombre})=>{
    const {user}=useAuth()
    console.log(user.data._id);
    
    const [nuevComentario, setNuevoComentario] =useState("")
    const [comentarios, setComentarios] =useState([])

    //socket.on: esucha los mensaje a lo que actuliza la lista de comentarios se renderiza de nuevo

    useEffect(() => {
        socket.on('nuevo-comentario', (comentario) => {
          setComentarios([...comentarios, comentario]);
        });
      }, [comentarios]);

    const enviarComentario = ()=>{
        socket.emit('nuevo-comentario', {
            nombre: nombre,
            texto: nuevComentario,
            idUsuario: user.data._id
        })
        setNuevoComentario('')
    }

    return(
        <>
            <Container>
                <h1>Comentarios</h1>
                <div>
                    
                    <input type="text" value={nuevComentario} onChange={(e)=>setNuevoComentario(e.target.value)}/>
                    <button onClick={enviarComentario}>Enviar</button>
                </div>
                <div>
                    {comentarios.map((comentario, index) => (
                    <div key={index}>
                        <strong>{comentario.id}:</strong> {comentario.texto}
                    </div>
                    ))}
                </div>
            </Container>
           
        </>
    )

}