import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions";

const sidebar_reducer=(state, action)=>{
    if(action.type===OPEN_SIDEBAR){
        return{
            ...state, 
            isSidebarOpen:true
        }
    }

    if(action.type===CLOSE_SIDEBAR){
        return{
            ...state, 
            isSidebarOpen:false
        }
    }

    throw new Error(`No coincide ${action.type} el action type`)
}

export default sidebar_reducer