import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { AppBar } from "../AppBar";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <AppBar
        pages={[
          { label: "Başvuru Listesi", path: "basvuru-listesi" }
        ]}
      />
      
      <div style={{ 
      backgroundColor:'#ddd',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      justifyContent:"center",
      alignItems:"center",
      minHeight:'93.6vh',
      padding:30,
       }}>{outlet}</div>
    </>
  );
};
