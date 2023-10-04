
import { useUrl } from '../../context/urlContext';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useEffect } from 'react';

export const RenderTituloVideo = (videos, sectionName) => {

    const{establecerNuevaUrl, setLinks}=useUrl()

    useEffect(() => {
      if (videos.length > 0) {
        sectionName === 0 && establecerNuevaUrl(parseInt(sectionName + 1), videos[0].video);
      }
    }, []);

    const handleVideo=(titulo, texto)=>{
      establecerNuevaUrl(parseInt(sectionName+1), titulo, texto)
     
    }

    return (
      <>
        {videos.map((videoObj, videoIndex) => {
         
          return (
            <div className="videos" key={videoIndex} onClick={()=>{handleVideo(videoObj.video, videoObj.Texto); setLinks(videoObj.links)}}>
              <ul  className="d-flex flex-start items" key={videoIndex}>
                <li className="mt-2 check">
                 <CheckBoxOutlineBlankIcon/>
                </li>
                <li className="fs-15">{videoObj.Titulo}</li>
                
              </ul>
            </div>
          );
        })}
      
      
      </>
        
      
    );
  };