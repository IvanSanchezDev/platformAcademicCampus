
import {connect, closeConnection} from '../database/connection.js'
import { envioCorreo } from '../helpers/sendEmail.js'


export class cursoController{

    static async getCursos(req, res){
        try {
            const db=await connect()
            const cursos=db.collection("cursos")
            const result=await cursos.find().toArray()
            res.status(200).json({"status":200, "data":result})
        } catch (error) {
            console.log(error);
            res.status(500).json({"status":500, "error":'No se pudo traer los cursos'})
        }
    }

    static async getCursosByName(req, res){
        try {
            const{nombre}=req.query
            const db=await connect()
            const cursos=db.collection("cursos")
            const result=await cursos.findOne({folder:nombre})
            res.status(200).json({"status":200, "data":result})
        } catch (error) {
            console.log(error);
            res.status(500).json({"status":500, "error":'No se pudo traer el curso especifico'})
        }
    }


    static async inscripcionCursos(req, res){
        try {
            const {nombreCurso, nombreUsuario, email, mensaje}=req.body
            
            const db=await connect()
            const inscripcionCursos=db.collection("inscripcionesCursos")
            const result=await inscripcionCursos.insertOne({nombre_usuario:nombreUsuario, nombre_curso:nombreCurso, progreso:0})
           
            if (result.acknowledged) {
                envioCorreo(email, mensaje)
                res.status(200).json({"status":200, "message":'Te has inscrito Correctamente'})
            }
            
        } catch (error) {
            res.status(500).json({"status":500, "error":'No se pudo realizar la inscripcion al curso'})
        }
    }

    static async verificarInscripcion(req, res){
        try {
            const {nombreCurso, nombreUsuario}=req.body
            const db=await connect()
            const inscripcionCursos=db.collection("inscripcionesCursos")
            const result=await inscripcionCursos.findOne({nombre_usuario:nombreUsuario, nombre_curso:nombreCurso})
            if (!result) {               
                return res.status(200).json({"status":403, "message":'No esta inscrito al curso ', estado:false})
            }
            res.status(200).json({"status":200, "message":'esta inscrito al curso', estado:true})
        } catch (error) {
            res.status(500).json({"status":500, "message":'No se pudo realizar la inscripcion al curso'})
        }
    }

    static async hacerComentarios(req, res){
        try {
            const {nombre,rating, texto, curso,avatar, discordId, fecha}=req.body
           
            const db=await connect()
            const cursos=db.collection("cursos")
            const result=await cursos.updateOne(
              {folder: curso}, 
              {
                $push: {
                  comentarios: {
                    discord_id:discordId,
                    nombre_usuario: nombre,               
                    imagen_perfil:avatar,
                    rating:rating,
                    texto: texto,
                    fecha:new Date(fecha)
                  }
                }
              }
              
            )
           if (result.modifiedCount===0) {
           res.status(400).json({status:400, message:'No se puedo enviar el mensaje, intentalo de nuevo', estado:false})
                
           }
           
           res.status(200).json({status:200,message:'Mensaje enviado con exito!', estado:true})
          } catch (error) {
            console.log(error);
            
          }
    }

    static async getCursosPropios(req, res){
        try {
            const{usuario}=req.query
            const db=await connect()
            const inscripcionesCursos=db.collection("inscripcionesCursos")
            const result=await inscripcionesCursos.aggregate([
                {
                  $match: {
                    nombre_usuario: usuario
                  }
                },
                {
                  $lookup: {
                    from: 'cursos',
                    localField: 'nombre_curso',
                    foreignField: 'folder',
                    as: 'cursoInfo'
                  }
                },
                {
                  $unwind: '$cursoInfo'
                },
                {
                  $project: {
                    folder: '$cursoInfo.folder',
                    nameCourse: '$cursoInfo.nameCourse',
                    autor: '$cursoInfo.autor',      
                    imagenCourse: '$cursoInfo.imagenCourse',     
                  }
                }
              ]).toArray()
            res.status(200).json({"status":200, "data":result})
        } catch (error) {
            console.log(error);
            res.status(500).json({"status":500, "error":'No se pudo traer el curso especifico'})
        }
    }
    
      

   

    
    
}