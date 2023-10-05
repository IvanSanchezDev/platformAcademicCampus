import nodemailer from "nodemailer";
import { loadEnv } from 'vite'
const env=loadEnv("development", process.cwd(), 'VITE')


export async function envioCorreo(mensaje, email) {

  
    try {
      let config = {
        host: "smtp.gmail.com",
        port:465,
        secure:true,
        auth: {
          user: env.VITE_CORREO,
          pass: env.VITE_CODIGO
        },
      };
  
      const transporter = nodemailer.createTransport(config);
  
      const info = await transporter.sendMail({
        to: email,
        from: env.VITE_CORREO,      
        subject: "Bienvenido al curso!",
        text: mensaje,
      });
      
    } catch (error) {
      console.log("error envio correo " + error.message);
    }
  }