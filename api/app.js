import express from 'express'
import cors from 'cors'
import passport from 'passport';
import { router as routerAuth } from './routes/auth.routes.js';
import { router as routerUser } from './routes/user.routes.js';
import { router as routerCourse } from './routes/curso.routes.js';
import session from "express-session";
import { loadEnv } from 'vite'
import { Server as SocketServer } from 'socket.io';
import http from 'node:http'
import {connect, closeConnection } from './database/connection.js'


const env=loadEnv("development", process.cwd(), 'VITE')



export const app = express()

export const server=http.createServer(app)//server http
const io=new SocketServer(server) //server websocket

io.on('connection', socket=>{
  console.log('client connection');
  socket.on('nuevo-comentario', async(data)=>{
    try {
      const {nombre, texto, curso}=data
      const db=await connect()
      const cursos=db.collection("cursos")
      const result=await cursos.updateOne(
        {nombre: curso}, 
        {
          $push: {
            comentarios: {
              nombre_usuario: nombre,
              texto: texto
            }
          }
        }
        
      )
      const nuevoComentario={
        nombre_usuario: nombre,
        texto: texto
      }
      io.emit('nuevo-comentario', nuevoComentario);
      
    } catch (error) {
      console.log(error);
      
    }finally{
      await closeConnection()
    }
    
  })
})

app.use(cors({origin:true, methods:"GET,POST",credentials:true}))

app.use(
    session({
      secret: env.VITE_SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(express.json());

//configurar variable global
app.use((req, res, next) => {
  app.locals.user = req.user;
  next();
});





app.use('/auth', routerAuth)
app.use('/api', routerUser)
app.use('/api/curso', routerCourse)

