
import  { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const UrlProvider = ({ children }) => {

const [url, setUrl]=useState('')
const[nameCourse, setNameCourse ]=useState('')
const[texto, nuevoTexto]=useState('')

  const establecerNuevaUrl = (numeroSection, nameVideo, texto) => {
    if(nameVideo){
      const url=`http://192.168.128.23:5010/cursos/play?course=${nameCourse}&seccion=${numeroSection}&video=${nameVideo}`
      setUrl(url)
    }else{
      setUrl("")
      nuevoTexto(texto)
    }
    
  };

  

  const establecerNombreCourse=(name)=>{
    setNameCourse(name)
}

  return <MyContext.Provider value={{ url, texto, establecerNuevaUrl, establecerNombreCourse }}>{children}</MyContext.Provider>;
};

export const useUrl = () => {
  return useContext(MyContext);
};
