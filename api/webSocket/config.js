import { server} from '../app.js'
import { Server as SocketServer } from 'socket.io';
const io=new SocketServer(server) //server websocket

io.on('connection', socket=>{
  console.log('client connection');
  socket.on('message', (data)=>{
    console.log(data);
  })
})