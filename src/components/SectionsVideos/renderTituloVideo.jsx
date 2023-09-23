import Form from 'react-bootstrap/Form';


export const renderTituloVideo = (videos) => {
    const videoArray = Object.values(videos);

    return (
      <>
        {videoArray.map((videoObj, videoIndex) => {
          const videoKey = Object.keys(videoObj)[0]; 
          const video = videoObj[videoKey]; 
  
          return (
            <div className="videos" key={videoIndex}>
              <ul  className="d-flex flex-start items">
                <li className="mt-2">
                  <Form.Check aria-label="option 1" />
                </li>
                <li className="fs-15">{video.Titulo}</li>
                
              </ul>
            </div>
          );
        })}
      
      
      </>
        
      
    );
  };