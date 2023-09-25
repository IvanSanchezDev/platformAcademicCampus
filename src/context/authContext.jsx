import { useContext, createContext, useState, useEffect} from "react";

const AuthContext = createContext();


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
    return context;
};


export const AuthProvider=({children})=>{
    
 
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isloading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    
    const logout = async () => {   
        try {
            const response=await fetch(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/auth/logout`, {
              method:'GET',
              headers:{
                "Content-Type": "application/json"
              },
              credentials: 'include'
            })

              const result=await response.json()
              console.log(result);
              localStorage.removeItem("estado");
               setIsAuthenticated(false)
               
          } catch (error) {
            console.log(error.message);
          }
    };

    
    async function checkAuth(){    
        try {          
          const token=localStorage.getItem('estado');
          if (token) {
                const userInfo=await traerInfo()      
                setIsAuthenticated(true);         
                setUser(userInfo)    
                setIsLoading(false);
          }else{
            setIsLoading(false);
         }
                
        } catch (error) {
            setIsLoading(false);
        }
    }
    
    useEffect(() => {         
      checkAuth();
    }, [isAuthenticated]);
    
    


    return (
        <AuthContext.Provider value={{logout, isAuthenticated, user, isloading, setIsAuthenticated }}>
            {isloading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    )

}

const traerInfo=async()=>{
               
    try {
      
        const response = await fetch(`http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/api/user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",         
          },
          credentials: 'include'
        });
    
        if (response.ok) {
       
          const json = await response.json();
          
          return json
        }  else {
          console.error(`Error en la solicitud: ${response.status}`);
        }
      
        
      } catch (error) {
        
        console.log(error);
      }
}

export default AuthContext;