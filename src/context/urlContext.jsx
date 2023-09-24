
import  { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const UrlProvider = ({ children }) => {

const [url, setUrl]=useState('')
const[nameCourse, setNameCourse ]=useState('')

  const establecerNuevaUrl = (numeroSection, nameVideo) => {
    const url=`http://192.168.128.23:5010/cursos/play?course=${nameCourse}&seccion=${numeroSection}&video=${nameVideo}`
    setUrl(url)
  };

  const establecerNombreCourse=(name)=>{
    setNameCourse(name)
}

  return <MyContext.Provider value={{ url, establecerNuevaUrl, establecerNombreCourse }}>{children}</MyContext.Provider>;
};

export const useUrl = () => {
  return useContext(MyContext);
};
