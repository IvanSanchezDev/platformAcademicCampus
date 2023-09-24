import express from 'express'
import cors from 'cors'
import passport from 'passport';
import { router as routerAuth } from './routes/auth.routes.js';
import { router as routerUser } from './routes/user.routes.js';
import { router as routerCourse } from './routes/curso.routes.js';


import session from "express-session";
import { config } from 'dotenv';

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

//configurar variable global
app.use((req, res, next) => {
  app.locals.user = req.user;
  next();
});





app.use('/auth', routerAuth)
app.use('/api', routerUser)
app.use('/api/curso', routerCourse)

