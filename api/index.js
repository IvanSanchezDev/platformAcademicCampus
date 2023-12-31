import { app } from "./app.js";
import { loadEnv } from 'vite'
const env=loadEnv("development", process.cwd(), 'VITE')



const config={
    port : env.VITE_PORT_BACKEND,
    hostname:env.VITE_HOSTNAME
}

app.listen(config, ()=>{
    console.log(`server listening on http://${config.hostname}:${config.port}`);
})