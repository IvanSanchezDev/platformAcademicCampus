import express from 'express'
import cors from 'cors'
import passport from 'passport';
import { router as routerAuth } from './routes/auth.routes.js';
import { router as routerUser } from './routes/user.routes.js';

import session from "express-session";
import { config } from 'dotenv';
import { isAuthorized } from './middlewares/auth.js';
config()
export const app = express()
app.use(cors({origin:true, methods:"GET,POST",credentials:true}))

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(express.json());


app.get('/Dashboard', isAuthorized, (req, res) => {
  res.send('Bienvenido ' + req.user.nombre_usuario);
});


app.use('/auth', routerAuth)
app.use('/api', routerUser)

