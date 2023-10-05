import { Container } from "react-bootstrap";
import SectionsVideos from "./SectionsVideos/SectionsVideos";
import { useState, useEffect, useMemo } from "react";
import {  useLocation, useParams } from "react-router-dom"
import { useUrl } from "../context/urlContext";
import { useInscripcion } from "../context/inscripcionContext";
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarVideos from "./SectionsVideos/NavbarVideos";
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



const CoursePage=()=>{
    const { state } = useLocation()
    const {nameCourse}=useParams();
    const {user}=useAuth()
    const{establecerNombreCourse, url, texto, links}=useUrl()
    const {verificarInscripcion, isEnrolled}=useInscripcion()
    const [listSections, setSections]=useState([])
    const navigate = useNavigate();
    const videoKey = useMemo(() => Math.random(), [url]);
    const [isLoading,setLoading]=useState(true)
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        verificarInscripcion(user.nombre_usuario, nameCourse);
      }, []);

      useEffect(() => {
        (async () => {
            try {
                if (isEnrolled) {
                    const response = await fetch(`http://192.168.128.23:5010/cursos/v2?course=${nameCourse}`);
                    const result = await response.json();
                    setLoading(false);
                    setSections(result);
                    establecerNombreCourse(nameCourse);
                }
                
                
            } catch (error) {
                console.log(error);
                
            }
        })();
    }, [nameCourse, url, isEnrolled]);
    
    useEffect(() => {

        if (!isLoading && !isEnrolled) {
            navigate(`/detailsCourse/${nameCourse}`);
        }
    }, [isLoading, isEnrolled, nameCourse]);

    


    return(
        <VideoWrapper>
         <NavbarVideos tituloCourse={state ? state.titulo : "Título no disponible"} nameCourse={nameCourse} />
        <Container className="mt-5">
        <Row>
        <Col lg={9}>
        {url ? ( 
            <div style={{ width: '100%' }}>
              <video controls style={{ width: '100%' }}  key={videoKey}>
                <source src={url} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="fs-20 flex flex-center " style={{ height: '25%' }}>
                <div style={{ width: '50%' }}>
                    <h2 className="fs-50 titulo fw-7">Nota </h2>
                    <br/>
                    <br />
                    {texto.toString()}
                </div>
               
            </div> // Muestra un div con texto si no hay video
          )}
          <div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Recursos" value="1" sx={{ fontSize: '15px', color:'#2D2F31' }} />             
                  </TabList>
                </Box>
                <TabPanel value="1">
                  {
                    links && (
                      links.map((info)=>{
                        return (
                          <ul className="">
                            <li>   <h2 className="fs-20 fw-5 mt-1">{info['titulo-link']}:</h2>
                          <div className="fs-15 ml-5"> {info.link}</div>
                          </li>
                       
                          </ul>
                          
                        )
                      })
                    )
                    }
                </TabPanel>
                
              </TabContext>
            </Box>
          </div>
        </Col>
        <Col lg={3} >
            {isLoading ? <div>Cargandooo...</div> : <SectionsVideos listSection={listSections} />}
            
        </Col>
      </Row>
                
            
        </Container>
        
            
            
        </VideoWrapper>
        
        )
}


const VideoWrapper=styled.div`
background-color: #EDEDED;
`;

export default CoursePage