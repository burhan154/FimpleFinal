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
import {  useDispatch ,useSelector} from 'react-redux';
import { addTicket,clearTicket } from "../../store/modules/ticket/action";
import {createTicketValidations} from "../../components/Validation/TicketValidate"

export const CreateTicketPage = () => {
  const [error, setError] = React.useState('');
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticket);
  const navigate = useNavigate();

  const handleSubmit = (event) => { 
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      lastname: event.target.lastname.value,
      age: event.target.age.value,
      reason: event.target.reason.value,
      photo: event.target.photo.value,
      address:event.target.address.value,
    };

    createTicketValidations.validate(formData).then((data)=>{
      dispatch(addTicket(data)).then(() => {
          navigate("/basvuru-basarili/");   
      })
      event.currentTarget.reset();

    }).catch((err)=>{
      setError(err.errors[0])
    })
  };

  React.useEffect(() => {
    dispatch(clearTicket())
  }, []);

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
        Başvuru Oluştur
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="İsim"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Soyad"
            name="lastname"
            autoComplete="lastname"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="age"
            type="number"
            label="Yaş"
            name="age"
            autoComplete="age"
          />
           <TextField
            margin="normal"
            required
            fullWidth
            id="reason"
            label="Sebep"
            name="reason"
            autoComplete="reason"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="photo"
            label="Ekler"
            name="photo"
            autoComplete="photo"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Adres"
            name="address"
            autoComplete="address"
          />
          {error}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Başvuru Oluştur
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to="/basvuru-sorgula">
                <Link href="#" variant="body2">
                  {"Oluşturulmuş başvurun var mı? Başvuru sorgula"}
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
