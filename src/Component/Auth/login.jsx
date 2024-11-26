import * as React from 'react';
import { Box, Button, Card, CircularProgress, TextField, Typography, } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../../Redux/authSlice';
import { useForm } from 'react-hook-form';
import { createTheme, ThemeProvider } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import './style.css'

// FONT STYLE //
const theme = createTheme({
    typography: { fontFamily: 'Poppins, Arial, sans-serif' }
})

export default function Login() {
    const { redirectHome } = useSelector((state) => state.authKey)

    const { register, handleSubmit, formState: { errors } } = useForm();

    // LOADING // 
    const [loading, setLoading] = useState(false);

    // const {login}=useAuth();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setLoading(true);
        dispatch(signin(data))

        // navigate('/profile');
    }


    const RedirectUser = () => {
        let token = localStorage.getItem('token');
        let Isinlogin = window.location.pathname.toLowerCase() === '/login';
        if (token !== null && token !== undefined && token !== "") {
            Isinlogin && navigate('/')
        }
    }

    useEffect(() => {
        RedirectUser();
    }, [redirectHome]);

    return (
        <ThemeProvider theme={theme}>
            {loading && (
                <Box sx={{ width: '100%', position: 'relative', top: '10%' }}>
                    <LinearProgress />
                </Box>
            )}
            <Box component="section" sx={{
                p: { xs: 0, sm: 0, md: 0, lg: 1, xl: 2 }, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relatives',
                height: { xs: 'auto', sm: 'auto', md: 'auto', lg: '90vh', xl: '90vh' },

                backgroundImage: {
                    xs: 'url(/Images/travlerfamily.jpg)',
                    sm: 'url(/Images/travlerfamily.jpg)',
                    md: 'url(/Images/1730286934841.jpg)',
                    lg: 'url(/Images/1730286934841.jpg)',
                    xl: 'url(/Images/1730286934841.jpg)'
                },
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                backdropFilter: 'blur(5px)'
            }}>
                <Card sx={{
                    bgcolor: "transparent",
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    width: { xs: '100%', sm: '90%', md: '80%', lg: '70%', xl: '50%' },
                    height: { xs: '34.5rem', sm: '23.25rem', md: '25.25rem', lg: '31.25rem', xl: '37.5rem' },
                    boxShadow: 8,
                    backdropFilter: 'blur(5px)',
                    mt: { xs: 0, sm: 2, md: 4, lg: 5 },
                    overflow: 'hidden',


                }}>


                    {/* Left Side - Image Box */}
                    <Box sx={{
                        mt: 0,
                        width: { xs: '100%', sm: '50%' },
                        display: 'flex',
                        // mt: '35px',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        backgroundImage: {
                            xs: 'url(/Images/rb_12922.png)',
                            sm: 'url(/Images/rb_12922.png)',
                            md: 'url(/Images/rb_12922.png)',
                            lg: 'url(/Images/rb_12922.png)',
                            xl: 'url(/Images/rb_12922.png)'
                        },
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }} />

                    {/* Right Side - Sign In Form */}
                    <Box component='form' onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            display: 'flex', flexDirection: 'column', width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, gap: 2,

                            px: 2,
                            mx: 'auto',
                            bgcolor: { xs: 'rgba(250,250,250,0.5)', sm: '', md: '' },
                        }}>

                        <Typography variant='h4' sx={{ color: 'black', textAlign: 'center', mt: 3 }}>Sign In</Typography>

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
                            fullWidth
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
                                    // message: 'Password must be more than 4 digits',
                                    message: 'Incorrect Password ',
                                },
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            required
                        />

                        <Box>
                            <Button variant='contained' type='submit' sx={{ mt: 3, width: { xs: '50%', sm: '40%', lg: '30%' } }}>
                                {

                                    loading ? <CircularProgress size={30} color='inherit' /> : 'Sign In'
                                }
                            </Button>
                        </Box>

                        <Box sx={{ display: 'flex', my: 2, justifyContent: 'center' }}>
                            <Typography sx={{ color: "black", fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>
                                Don't have an account?
                                <Link to={'/register'} style={{ color: 'rgb(24, 119, 242) ', textDecoration: 'none', marginLeft: 5 }}>Register </Link>here
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </ThemeProvider>
    );
}
