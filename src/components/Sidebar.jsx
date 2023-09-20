
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { useSidebarContext } from '../context/sidebar_context'
import { useNavigate } from "react-router-dom"


const Sidebar=()=>{

    const {closeSidebar, isSidebarOpen}=useSidebarContext()

    const Navigate=useNavigate()

    const cerrarSesion=async()=>{
      
      try {
        const response=await fetch('http://localhost:1234/auth/logout', {
          method:'GET',
        })
        console.log(response);
        if(response.ok){
          Navigate('/login')
        };
        
      } catch (error) {
        console.log(error.message);
      }
    }
    
    return(
        
        <SidebarWrapper className={`bg-white ${isSidebarOpen ? "show-sidebar" : "" }`}>
            <button type="button" className="sidebar-close-btn" onClick={()=>closeSidebar()}>
                <MdClose/>
            </button>
            <div className="sidebar-content">
                <h6 className="fs-18">Top Categorias</h6>
                <ul className="sidebar-category">
                    <li>React</li>
                </ul>
            </div>
            <div>
              <button type="button" className="btnCerrarSesion" onClick={cerrarSesion}>Cerrar Sesion</button>
            </div>
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  z-index: 10;
  height: 100%;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  transform: translateX(100%);
  transition: var(--transition);

  &.show-sidebar{
    transform: translateX(0);
  }

  .sidebar-close-btn{
    position: absolute;
    right: 20px;
    top: 20px;
    border: 2px solid var(--clr-black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }

  .btnCerrarSesion{
    border: 1px solid;
    background-color: black;
    color:white;
  }
  
`;

export default Sidebar