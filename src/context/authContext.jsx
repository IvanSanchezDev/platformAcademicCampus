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


    const saveUser = (data) => {
     setUser(data)
     setIsAuthenticated(true)
     setIsLoading(false)
    }


    const getUser=()=>{
      return user
    }
    
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
              setUser(null);
               setIsAuthenticated(false)
               
          } catch (error) {
            console.log(error.message);
          }
    };

    async function checkAuth() {
      try {
        // Realiza una verificación de autenticación y obtén el usuario si está autenticado
        const userInfo = await traerInfo();
  
        if (userInfo) {
          setIsAuthenticated(true);
          setUser(userInfo);
        } else {
          setIsAuthenticated(false);
        }
  
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
  
    
    useEffect(() => {         
      checkAuth();
    }, []);
    
    


    return (
        <AuthContext.Provider value={{logout,getUser,saveUser, isAuthenticated, user, isloading, setIsAuthenticated }}>
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