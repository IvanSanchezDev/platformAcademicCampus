import styled from 'styled-components'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavbarVideos=({tituloCourse, nameCourse})=>{



    return(
        <NavbarWrapper className='flex'>
            <Container className='w-100 d-flex ' fluid>
                <div className='titulo'>
                    <Link to='/home' className='navbar-brand text-uppercase ls-1 fw-8'>
                        <span>C</span>ampusAcademic                
                    </Link>                
                </div>
                <div className="vr"></div>
                <div className='fs-16 subtitulo flex '>
                  <Link to={`/detailsCourse/${nameCourse}`} >{tituloCourse}</Link>           
                </div>
            </Container>           
        </NavbarWrapper>
    )
}

const NavbarWrapper=styled.nav`
height: 80px; 


.titulo, .subtitulo, .vr{
  margin-left: 10px;
}


.subitulo:hover{
  color:#481593;
}



.navbar-brand{
  font-size: 20px;
  span{
    color: var(--clr-orange);
  }
}


`;

export default NavbarVideos