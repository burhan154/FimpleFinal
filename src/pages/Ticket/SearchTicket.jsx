import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink,useNavigate } from "react-router-dom";
import {searchTicketValidations} from "../../components/Validation/TicketValidate"

export const SearchTicketPage = () => {
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      code: event.target.text.value,
    };
    searchTicketValidations.validate(formData).then((data)=>{
      setError("");
      navigate("/basvuru/"+data.code); 
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
          Ara
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Başvuru Kodu"
            name="text"
            autoComplete="text"
            autoFocus
          />
          {error}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }} 
          > Başvuru Ara
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to="/basvuru-olustur">
                <Link href="#" variant="body2">
                  {"Başvurun yok mu? Başvuru oluştur."}
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
