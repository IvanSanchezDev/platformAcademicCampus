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

    console.log(comentarios);

    useEffect(() => {
        socket.on('nuevo-comentario', (comentario) => {
          setComentarios([...comentarios, comentario]);
        });
      }, [comentarios]);

    const enviarComentario = ()=>{
        socket.emit('nuevo-comentario', {
            curso: nombreCurso,
            texto: nuevComentario,
            nombre: user.data.nombre_usuario
        })
        setNuevoComentario('')
    }

    return(
        <>
            <ComentariosWrapper>
               
                    <div className='course-sc-title'>Comentarios</div>
                    
                    <ul className='comentarios-list mt-5'>
                        {comentarios && comentarios.map((comentario, index) => {
                        
                            return(
                                <li key={index}>
                                    <span className='fs-18 fw-7'>{comentario.nombre_usuario}:</span><span className='fs-16 fw-5 opacity-09 textoo'>{comentario.texto}</span>
                                </li>
                            )
                        })}
                       
                        
                    </ul>
                    <div className='enviarComentario'>                       
                        <input type="text" className='comment-box' value={nuevComentario} placeholder="Agrega un comentario" onChange={(e)=>setNuevoComentario(e.target.value)}/>
                        <button className='comment-btn' onClick={enviarComentario}>Agregar</button>
                    </div>               
                
            </ComentariosWrapper>
           
        </>
    )

}


const ComentariosWrapper=styled.div`
    

    .course-sc-title{
        font-size: 22px;
        font-weight: 700;
        margin: 12px 0;
      }

    .comentarios-list{
        display:flex;
        //justify-content:center;
        flex-wrap: wrap;
        gap:2rem;
        //height:1000px;
        overflow: auto;
        li{
           height:auto;
            overflowY:'auto';
            text-overflow: ellipsis; 
            display:flex;
            flex-direction:column;
            width:400px;
            //background-color: #f7f9fa;
            padding: 12px 18px;
            border-top: 1px solid rgba(0, 0, 0, 0.2);
            word-wrap: break-word;
            overflow: auto;

            
        }

        
    }

    .enviarComentario{
        width: 95%;
        border: 1px solid #dfdfdf; /* Modificado */
        display: flex;
        //align-items: center;
        justify-content:center;
        box-sizing: border-box; /* Agregado */
        padding: 20px 10px; /* Agregado */

        .comment-box {
            width: 70%;
            height: 100%;
            border: none;
            outline: none;
            font-size: 16px;
        }
        
        .comment-btn {
            width: 70px;
            height: 100%;
            background: none;
            border: none;
            outline: none;
            text-transform: capitalize;
            font-size: 18px;
            color: rgb(0, 143, 226);
            
        }
    }
`;