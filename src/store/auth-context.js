import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout:()=>{},//defining this overfere helps in auto suggest 
    onLogin:(email,password)=>{}
})
export const AuthContextprovider = props =>{    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
      };

    return <AuthContext.Provider value={{
        isLoggedIn:isLoggedIn,
        onLogout:logoutHandler,
        onLogin:loginHandler
    }}> {props.children}</AuthContext.Provider>

}
export default AuthContext