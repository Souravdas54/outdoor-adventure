import * as React from 'react';
import { Box, Button, Card, CircularProgress, TextField, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../Redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './style.css'
import { createTheme, ThemeProvider } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';


// FONT STYLE //
const theme = createTheme({
  typography: { fontFamily: 'Poppins, Arial, sans-serif' }
})

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Register() {

  const { redirectLogin } = useSelector((state) => state.authKey);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // D I A L O G - B O X //
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // LOADING // 
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };



  const [profile_pic, setProfile_pic] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {

    let firstname = data.first_name.charAt(0).toUpperCase() + data.first_name.slice(1);
    let lastname = data.last_name.charAt(0).toUpperCase() + data.last_name.slice(1);

    const formData = new FormData();
    formData.append('first_name', firstname);
    formData.append('last_name', lastname);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('profile_pic', profile_pic);
    setLoading(true);

    try {
      const result = await dispatch(signup(formData)).unwrap();
      if (result.status === 200) {
        setAlertMessage(<span style={{ color: 'green' }}>Registration successful!</span>);
        setOpen(true);
        navigate('/login');
      } else {
        setAlertMessage(<span style={{ color: 'red' }}>Registration failed. Please try again.</span>);
        setOpen(true);
      }
    } catch (error) {
      setAlertMessage("An error occurred. Please try again.");
      setOpen(true);
    }
  };

  const handleOK = () => {
    handleClose();
    window.location.reload();

  }

 
  useEffect(() => {
    if (redirectLogin) {
      navigate(redirectLogin);
    }
  }, [redirectLogin, navigate]);

  return (
    <ThemeProvider theme={theme}>
      {loading && (
        <Box sx={{ width: '100%', position: 'relative', top: '10%' }}>
          <LinearProgress />
        </Box>
      )}
      <Box component="section" sx={{
        p: { xs: 0, sm: 0, md: 0, lg: 2, xl: 2 }, display: 'flex', justifyContent: 'center', alignItems: 'center',
        height: { xs: 'auto', sm: 'auto', md: 'auto', lg: '90vh', xl: 'auto' },
        color: '#fff',

        backgroundImage: {
          xs: 'url(/Images/sitting-beach.png)',
          sm: 'none',
          md: 'none',
          lg: 'none',
          xl: 'none'
        },
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        position: 'relative',

      }}>

        <Card sx={{
          bgcolor: { xs: 'rgba(224, 224, 224,0.3)', sm: 'rgba(224, 224, 224,0.3)', lg: 'white', xl: 'white' },
          display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between',
          width: { xs: '100%', sm: '90%', md: '80%', lg: '70%', xl: '50%' }, height: 'auto', padding: 0,
          boxShadow: 15,
          backdropFilter: { xs: 'blur(3px)', sm: 'blur(3px)', },
        }}>

          <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" >
            <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description"> {alertMessage}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant='outlined' className='hober-button' onClick={handleOK} color="primary" autoFocus > OK</Button>
            </DialogActions>
          </Dialog>

          {/* Left Side - Image Box */}
          <Box sx={{
            width: { xs: '100%', sm: '50%' }, display: 'flex', justifyContent: 'center', alignItems: 'center',
            mb: { xs: 2, sm: 0 },
            backgroundImage: {
              xs: 'url(/Images/sitting-beach-1.png)',
              sm: 'url(/Images/sitting-beach-1.png)',
              md: 'url(/Images/sitting-beach-1.png)',
              lg: 'url(/Images/sitting-beach-1.png)',
              xl: 'url(/Images/sitting-beach-1.png)'
            },
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',

          }} >
          </Box>

          {/* Right Side - Sign Up Form */}
          <Box component='form' onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: 'flex', flexDirection: 'column', width: { xs: '90%', sm: '50%' }, gap: 2, px: { xs: 1, sm: 2 },
              mx: 'auto',
            }}>


            <Typography variant='h4' sx={{ color: 'black', mt: 2, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, }}>Sign Up</Typography>


            <TextField
              className="textField textFieldInput"
              label="First Name"
              variant="standard"
              {...register('first_name', {
                required: 'First name is required',
                onChange: (e) => { e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1) },

              })}
              error={!!errors.first_name}
              helperText={errors.first_name?.message}
              required

            />

            <TextField
              className="textField textFieldInput"
              label="Last Name"
              variant="standard"
              {...register('last_name', {
                required: 'Last name is required',
                onChange: (e) => { e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1) },

              })}
              error={!!errors.last_name}
              helperText={errors.last_name?.message}
              required
            />

            <TextField
              className="textField textFieldInput"
              label="Email"
              variant="standard"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email'
                }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              required
            />

            <TextField
              className="textField textFieldInput"
              label="Password"
              variant="standard"
              type="password"
              {...register('password', {
                required: 'Password is required',
                maxLength: {
                  value: 10,
                  message: 'Password must be exactly 4 digits',
                },
                pattern: {
                  value: /^\d{4,}$/,
                  message: 'Password must be 4 digits',
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              required
            />

            <Button variant="contained" component="label" sx={{ mt: 2 }} startIcon={<UploadFileIcon />}>
              Upload Image
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => setProfile_pic(e.target.files[0])}
              />
            </Button>

            <Button type="submit" variant='contained' sx={{ mt: 3, width: { xs: '70%', sm: '40%' } }}>
              {

                loading ? <CircularProgress size={30} color='inherit' /> : 'Sign Up'
              }

            </Button>
            {/* LINK TEXT */}
            <Box sx={{ display: 'flex', my: 2, justifyContent: 'center' }}>
              <Typography sx={{ color: "black", fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>Alreay have an account ?
                <Link to={'/login'} style={{ color: 'rgb(24, 119, 242) ', textDecoration: 'none', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}> Sign in</Link></Typography>

            </Box>

          </Box>
        </Card>
      </Box>
    </ThemeProvider>

  )
}
