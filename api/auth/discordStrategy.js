import { connect, closeConnection} from '../database/connection.js'
import passport from "passport";
import { Strategy as DiscordStrategy} from 'passport-discord'
import { ObjectId } from 'mongodb';
import { loadEnv } from 'vite'
const env=loadEnv("development", process.cwd(), 'VITE')




passport.use(new DiscordStrategy({
    clientID: env.VITE_DISCORD_CLIENT_ID,
    clientSecret: env.VITE_DISCORD_CLIENT_SECRET,
    callbackURL: `/auth/redirect`,
    scope: ['identify', 'guilds', 'email']
}, async (accestoken, refreshtoken, profile, done) =>{
  try {
    
    const db=await connect()
    const usuarios=db.collection("usuarios")
    const user=await usuarios.findOne({discord_id:profile.id})
    if (user) return done(null, user);

    const isCamper=profile.guilds.some((guild)=> guild.id==='1101581994355347526')
    if (!isCamper){
      return done("Usuario no pertenece a campuss", null)
    }

    const newUser={
      discord_id:profile.id,
      nombre_usuario:profile.username,
      correo_electronico:profile.email,
      imagen_perfil:profile.avatar
    }
    
  
    const {insertedId}=await usuarios.insertOne(newUser)
   const result={
    _id:insertedId, 
    info:newUser
  }

    done(null, result)

      
  } catch (error) {
    console.error(error);
    return done(error, null)
  }finally{
    await closeConnection()
  }
}))


passport.serializeUser((user, done) =>{
  done(null, user._id);
})

passport.deserializeUser(async (id, done) =>{
  const db=await connect()
  const usuarios=db.collection('usuarios')
  const user=await usuarios.findOne({_id:new ObjectId(id)})
   done(null, user);
});

export default passport;