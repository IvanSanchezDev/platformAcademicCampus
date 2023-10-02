import Form from 'react-bootstrap/Form';
import { useUrl } from '../../context/urlContext';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export const RenderTituloVideo = (videos, sectionName) => {
    const videoArray = Object.values(videos);

    const{establecerNuevaUrl}=useUrl()

    const handleVideo=(titulo)=>{
      establecerNuevaUrl(parseInt(sectionName+1), titulo)
    }

    return (
      <>
        {videoArray.map((videoObj, videoIndex) => {
          const videoKey = Object.keys(videoObj)[0]; 
          const video = videoObj[videoKey]; 
  
          return (
            <div className="videos" key={videoIndex} onClick={()=>handleVideo(video.video)}>
              <ul  className="d-flex flex-start items" >
                <li className="mt-2 check">
                 <CheckBoxOutlineBlankIcon/>
                </li>
                <li className="fs-15">{video.Titulo}</li>
                
              </ul>
            </div>
          );
        })}
      
      
      </>
        
      
    );
  };