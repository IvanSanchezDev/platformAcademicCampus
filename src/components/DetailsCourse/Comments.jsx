import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { io } from "socket.io-client";
import { useAuth } from '../../context/authContext';
import styled from "styled-components"

const socket = io('/');


export const Comments=({nombreCurso, listComments})=>{
    const {user}=useAuth()

    
   
    const [nuevComentario, setNuevoComentario] =useState("")
    const [comentarios, setComentarios] =useState(listComments || [])

    

    useEffect(() => {
        socket.on('nuevo-comentario', (comentario) => {
          setComentarios([...comentarios, comentario]);
        });
      }, [comentarios]);

    const enviarComentario = ()=>{
        socket.emit('nuevo-comentario', {
            curso: nombreCurso,
            texto: nuevComentario,
            nombre: user.nombre_usuario
        })
        setNuevoComentario('')
    }

    return(
        <>
            <ComentariosWrapper>

                        {comentarios && comentarios.map((comentario, index) => {
                        
                            return(
                                <div key={index} className=''>
                                    <span className='fs-18 fw-7'>{comentario.nombre_usuario}:</span><span className='fs-16 fw-5 opacity-09 textoo'>{comentario.texto}</span>
                                </div>
                            )
                        })}
                       
            </ComentariosWrapper>
           
        </>
    )

}


const ComentariosWrapper=styled.div`
    
    div{
        width300px;
        background-color:white;
        gap:5rem;
    }

`;