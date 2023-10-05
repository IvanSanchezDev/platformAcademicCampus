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

        if (data) {
          const response = await fetch(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/api/curso/verificarInscripcion`, {
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
            
        }
        
      } catch (error) {
        console.log(error);
      }
    }


    const inscripcionCurso=async (username, nameCourse,  mensaje, email)=>{
      
      try {
        const data={
          nombreUsuario:username,
          nombreCurso:nameCourse,
          email:email,
          mensaje:mensaje
        }

        
        const response=await fetch(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/api/curso/inscripcionCursos`, {
          method:'POST',
          headers:{
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body:JSON.stringify(data)
        })
        
        if (response.ok) {
          const result=await response.json();
         
          setMessage(result.message)
          setIsEnrolled(true);
        }

      } catch (error) {
        
        console.log(error);
      }
    }


    return(
      
      
      <InscripcionContext.Provider value={{isLoading, verificarInscripcion, inscripcionCurso, isEnrolled, message, setMessage}}>
        {children}
      </InscripcionContext.Provider>
      
    )


  }

  