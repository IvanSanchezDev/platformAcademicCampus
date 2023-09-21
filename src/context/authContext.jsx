import { useContext, createContext, useState, useEffect} from "react";
import { Navigate } from "react-router-dom";
const AuthContext = createContext();



export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
    return context;
};

//compoonente que engloba a otros
export const AuthProvider=({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isloading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    

    const logout = async () => {     
      console.log("clickkkk");
        try {
            const response=await fetch('http://localhost:1234/auth/logout', {
              method:'GET',
              credentials: 'include'
            })
            console.log(response);
            if(response.ok){
              const result=await response.json()
              console.log(result.message);
              setIsAuthenticated(false)
              Navigate('/login')
            }
            
          } catch (error) {
            console.log(error.message);
          }
    };
    
    async function checkAuth(){
      console.log(isAuthenticated);
        try {
          
              if(isAuthenticated){
                const userInfo=await traerInfo()
                     
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
        const response = await fetch(`http://localhost:1234/api/user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            
          },
          credentials: 'include'
        });
    
        if (response.ok) {
       
          const json = await response.json();
          console.log(json);
          return json
        }  else {
          console.error(`Error en la solicitud: ${response.status}`);
        }
      } catch (error) {
        
        console.log(error);
      }
}

export default AuthContext;