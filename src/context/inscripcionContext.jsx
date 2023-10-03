import { useContext, createContext, useState} from "react";


const InscripcionContext=createContext()


export function useInscripcion() {
    return useContext(InscripcionContext);
  } 


export const InscripcionProvider=({children})=>{
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [message, setMessage] = useState('');
    const [isLoading, setLoading]=useState(true)

    async function verificarInscripcion(username, nameCourse) {
     
      try {
        const data={
          nombreUsuario:username,
          nombreCurso:nameCourse
        }
        
        const response = await fetch("http://localhost:5124/api/curso/verificarInscripcion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify(data),
        });
       
          const result = await response.json();
          setLoading(false)
          
          setIsEnrolled(result.estado)
         
          
        
      } catch (error) {
        console.log(error);
      }
    }


    const inscripcionCurso=async (username, nameCourse)=>{
      
      try {
        const data={
          nombreUsuario:username,
          nombreCurso:nameCourse
        }
        const response=await fetch('http://localhost:5124/api/curso/inscripcionCursos', {
          method:'POST',
          headers:{
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body:JSON.stringify(data)
        })
        
        if (response.ok) {
          const result=await response.json();
          console.log(result);
          setMessage(result.message)
          setIsEnrolled(true);
        }

      } catch (error) {
        
        console.log(error);
      }
    }


    return(
      
      
      <InscripcionContext.Provider value={{isLoading, verificarInscripcion, inscripcionCurso, isEnrolled, message}}>
        {children}
      </InscripcionContext.Provider>
      
    )


  }

  