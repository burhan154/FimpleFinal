
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { AppBar } from "../AppBar";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/admin/basvuru-listesi" replace />;
  }

  return (
    <>
      <AppBar
        pages={[
          { label: "Ana Sayfa", path: "/" },
          { label: "Basvuru Oluştur", path: "/basvuru-olustur" },
          { label: "Basvuru Sorgula", path: "/basvuru-sorgula" },
          { label: "Giriş", path: "/admin" }
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
