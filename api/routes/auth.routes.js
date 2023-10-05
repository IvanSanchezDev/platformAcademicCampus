import { Router } from "express";
import passport from "../auth/discordStrategy.js";
import { isAuthorized, isNotAuthorized } from "../middlewares/auth.js";

export const router = Router();

router.get('/login', isNotAuthorized ,passport.authenticate('discord'))

router.get('/redirect', passport.authenticate('discord', {
    successRedirect: "/auth/success",
    failureRedirect: '/auth/error'
}))

//en caso de exito, enviamos un mensaje a la ventana principal
router.get('/success', (req, res) => {
    try {
        const user = JSON.stringify(req.user)
        
    res.status(200).send(`<!DOCTYPE html>
    <html lang="en">
      <body>
      </body>
      <script>
        window.opener.postMessage(${user}, 'http://192.168.129.72:5123')
      </script>
    </html>`);
    } catch (error) {
        console.log(error.message);
    }
    
});

// Ruta para manejar la autenticación fallida
router.get('/failure', (req, res) => {
    
    res.redirect("/")
});

router.get('/logout', isAuthorized, (req,res)=>{
    req.logout
    req.session.destroy()
    console.log('se cerro la sesion');
    res.status(200).json({message:'logout_success'});
})