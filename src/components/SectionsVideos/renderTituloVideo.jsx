import Form from 'react-bootstrap/Form';
import { useUrl } from '../../context/urlContext';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export const RenderTituloVideo = (videos, sectionName) => {
    
  

    const{establecerNuevaUrl}=useUrl()

    const handleVideo=(titulo)=>{
      establecerNuevaUrl(parseInt(sectionName+1), titulo)
    }

    return (
      <>
        {videos.map((videoObj, videoIndex) => {
         
          return (
            <div className="videos" key={videoIndex} onClick={()=>handleVideo(videoObj.video)}>
              <ul  className="d-flex flex-start items" >
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