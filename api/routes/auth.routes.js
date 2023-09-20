import { Router } from "express";
import passport from "../auth/discordStrategy.js";
import { isNotAuthorized } from "../middlewares/auth.js";

export const router = Router();

router.get('/login',isNotAuthorized, passport.authenticate('discord'))

router.get('/redirect', passport.authenticate('discord', {
    successRedirect: "/auth/success",
    failureRedirect: '/auth/error'
}))

//en caso de exito, enviamos un mensaje a la ventana principal
router.get('/success', (req, res) => {
    res.send('<script>window.opener.postMessage("auth_success", "http://localhost:5173");window.close();</script>');
});

// Ruta para manejar la autenticación fallida
router.get('/failure', (req, res) => {
    // Puedes redirigir o mostrar un mensaje de error en caso de autenticación fallida
    res.redirect('/');
});

router.get('/logout', (req,res)=>{
    if(req.user){
        req.logout()
        console.log("secion cerrada");
    }else{
        console.log('no existe');
    }
    
    res.status(200).send('logout_success');
})