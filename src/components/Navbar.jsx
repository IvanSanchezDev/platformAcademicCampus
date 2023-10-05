
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import MenuPerfil from './MenuPerfil';


const Navbar=()=>{

    return(
        <NavbarWrapper className='bg-white flex'>
            <Container className='w-100'>
                <div className='brand-and-toggler flex flex-between w-100'>
                    <Link to='/' className='navbar-brand text-uppercase ls-1 fw-8'>
                        <span>C</span>ampusAcademic                
                    </Link>

                    <div className='navbar-btns flex'>
                      
                      <MenuPerfil/>
                    </div>

                </div>
            </Container>           
        </NavbarWrapper>
    )
}

const NavbarWrapper=styled.nav`
height: 80px; 


.navbar-brand{
  font-size: 23px;
  span{
    color: var(--clr-orange);
  }
}

.sidebar-open-btn{
  transition: all 300ms ease-in-out;
  &:hover{
    opacity: 0.7;
  }
}

/* Quitar el color azul del enlace del Dropdown */
.dropdown-item:focus, .dropdown-item:hover {
  background-color: transparent;
  text-decoration: none;
}

/* Quitar la flecha */
.dropdown-toggle::after {
  display: none;
}


@media (max-width: 767px) { 
  .navbar-brand{
    font-size: 16px;
  }
}


`;

export default Navbar