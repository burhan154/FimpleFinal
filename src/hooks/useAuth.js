import * as React from "react";
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import {  useDispatch ,useSelector} from 'react-redux';
import { signIn,signOut } from "../store/modules/auth/action";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useLocalStorage("user", userData);
  const [token, setToken] = useLocalStorage("token", userData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  React.useEffect(() => {
    if(auth.user.token!=null){
      setToken(auth.auth.user.token);
    }
  }, [auth.userToken]);

  React.useEffect(() => {
    if(auth.user.token!=null){
      setUser({
        name:auth.user.name,
        lastname:auth.user.lastname
      });
      navigate("/admin/basvuru-listesi", { replace: true });
    }
  }, [auth.user]);

  const login = async (data) => {
    dispatch(signIn(data.email,data.password))
  };

  const logout = () => {
    dispatch(signOut());
    setUser(null);
    setToken(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      token,
      login,
      logout
    }),
    [user,token]
  );

  if (auth.loading){
    return (
        <div justifyContent="center" alignItems="center " height="100vh">
            <h2>Loading</h2>
        </div>
    )
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
