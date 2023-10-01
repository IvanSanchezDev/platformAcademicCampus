import {connect, closeConnection} from '../database/connection.js'


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
        }finally{
            await closeConnection()
        }
    }

    static async getCursosByName(req, res){
        try {
            const{nombre}=req.query
            const db=await connect()
            const cursos=db.collection("cursos")
            const result=await cursos.findOne({nombre:nombre})
            res.status(200).json({"status":200, "data":result})
        } catch (error) {
            console.log(error);
            res.status(500).json({"status":500, "error":'No se pudo traer el curso especifico'})
        }finally{
            await closeConnection()
        }
    }


    static async inscripcionCursos(req, res){
        try {
            const {nombreCurso, nombreUsuario}=req.body
            const db=await connect()
            const inscripcionCursos=db.collection("inscripcionesCursos")
            const result=await inscripcionCursos.insertOne({nombre_usuario:nombreUsuario, nombre_curso:nombreCurso, progreso:0})
           
            if (result.acknowledged) {
                res.status(200).json({"status":200, "message":'Te has inscrito Correctamente'})
            }
            
        } catch (error) {
            res.status(500).json({"status":500, "error":'No se pudo realizar la inscripcion al curso'})
        }finally{
            await closeConnection()
        }
    }

    static async verificarInscripcion(req, res){
        try {
            const {nombreCurso, nombreUsuario}=req.body
            const db=await connect()
            const inscripcionCursos=db.collection("inscripcionesCursos")
            const result=await inscripcionCursos.findOne({nombre_usuario:nombreUsuario, nombre_curso:nombreCurso})
            if (!result) {               
                return res.status(403).json({"status":403, "message":'No esta inscrito al curso ', estado:false})
            }
            res.status(200).json({"status":200, "message":'esta inscrito al curso', estado:true})
        } catch (error) {
            res.status(500).json({"status":500, "message":'No se pudo realizar la inscripcion al curso'})
        }finally{
            await closeConnection()
        }
    }
    
      

   

    
    
}