import React, {useContext} from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    
    auth.onAuthStateChanged(user => {
        setCurrentUser(user);
    })


    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={{value}}>
            {children}
        </AuthContext.Provider>
    )
}