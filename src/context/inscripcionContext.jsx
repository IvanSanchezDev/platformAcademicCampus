import { useContext, createContext, useState} from "react";



const InscripcionContext=createContext()


export function useInscripcion() {
    return useContext(InscripcionContext);
  } 


export const InscripcionProvider=({children})=>{
 


    const fetchVerificarInscripcion = async ( username, nameCourse ) => {
      const data = {
        nombreUsuario: username,
        nombreCurso: nameCourse
      };
    
      console.log(data);
      const response = await fetch('http://localhost:5124/api/curso/verificarInscripcion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });
    
      const result = await response.json();
      console.log(result);
      return result;
    };
    
    // Función para inscribirse en un curso
    const fetchInscripcionCurso = async (username, nameCourse) => {
      const data = {
        nombreUsuario: username,
        nombreCurso: nameCourse
      };
    
      const response = await fetch('http://localhost:5124/api/curso/inscripcionCursos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });
    
      if (response.ok) {
        const result = await response.json();
        return result.message;
      }
      return 'Error en la inscripción';
    };


    return(
      
      
      <InscripcionContext.Provider value={{ fetchVerificarInscripcion, fetchInscripcionCurso }}>
        {children}
      </InscripcionContext.Provider>
      
    )


  }

  