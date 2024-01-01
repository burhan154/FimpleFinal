import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector} from 'react-redux';
import { useAuth } from "../../hooks/useAuth";
import { loginValidations } from "../../components/Validation/AuthValidate";

export const LoginPage = () => {
  const [error, setError] = React.useState('');
  const { login } = useAuth();
  const auth = useSelector((state) => state.auth);

  React.useEffect(() => {
    if(auth.userToken==null)
      setError(auth.error);
  }, [auth]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    loginValidations.validate(formData).then((data)=>{
      setError("");
      login(data);
    }).catch((err)=>{
      setError(err.errors[0])
    })  
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ 
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor:'white',
      padding:2,
      borderRadius:2,      
    }}>
      <Box
        sx={{ 
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Giriş Yap
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Adresi"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Şifre"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {error}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Giriş Yap
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
