import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
  useHistory,
  useLocation,redirect
} from "react-router-dom";

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  
  /** For more details on
   * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
   * refer to: https://usehooks.com/useAuth/
   */
  const authContext = createContext();
  
  export default function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
  }
  
  export function useAuth() {
    return useContext(authContext);
  }
  
  function useProvideAuth() {
    const [user, setUser] = useState(null);
  
    const signin = cb => {
      return fakeAuth.signin(() => {
        setUser("user");
        cb();
      });
    };
  
    const signout = cb => {
      return fakeAuth.signout(() => {
        setUser(null);
        cb();
      });
    };
  
    return {
      user,
      signin,
      signout
    };
  }
  
 
export function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            null
          )
        }
      />
    );
  }
