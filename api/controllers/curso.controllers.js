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
        }finally{
            await closeConnection()
        }
    }

    
      

   

    
    
}