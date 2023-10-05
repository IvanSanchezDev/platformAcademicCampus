import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { useAuth } from '../context/authContext';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


export default function AccountMenu() {
  const {user, logout}=useAuth()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cerrarSesion=()=>{
    logout();
    setAnchorEl(null);
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar alt="Remy Sharp" src={`https://cdn.discordapp.com/avatars/${user.discord_id}/${user.imagen_perfil}.png`} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
            <div className='flex flex-column' style={{padding:'10px'}}>
                <span className='fw-6 fs-16'>{user.nombre_usuario}</span>
                <span  className="fs-11" style={{color:'#707070'}}>{user.correo_electronico}</span>
            </div>
        </MenuItem>
        <Link to={'/profile'} style={{textDecoration:'none'}}>
          <MenuItem onClick={handleClose}>
            <span className="fs-14 " style={{color:'#707070'}}>Mis Cursos</span>          
          </MenuItem>
        </Link>
        <Divider sx={{backgroundColor:'black'}} variant="middle" />
        <MenuItem onClick={cerrarSesion}>
           <span className="fs-14" style={{color:'#707070'}}>Cerrar Sesion</span>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
