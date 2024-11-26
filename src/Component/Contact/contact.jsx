import React from 'react';
import { Box, Grid2, TextField, Button, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: { fontFamily: 'Poppins, Arial, sans-serif' }
})
export default function Contact() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                p: { xs: 2, sm: 4 }, maxWidth: '100%', justifyContent: 'center', textAlign: 'justify',
                height: { xs: 'auto', sm: 'auto', md: 'auto', lg: '80vh', xl: '90vh' }
            }}>
                <Grid2 container spacing={4}>

                    {/* Left side: Contact Form */}
                    <Grid2 item xs={12} md={6}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.2rem', lg: '3.5rem' }, color: 'rgb(217, 22, 86)' }}
                        >
                            We're Ready, Let's Talk.
                        </Typography>
                        <TextField
                            fullWidth
                            label="Your Name"
                            variant="outlined"
                            margin="normal"
                            sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            margin="normal"
                            sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                mt: 2,
                                width: {
                                    xs: '100%', sm: 'auto', md: 'auto', lg: '12rem', xl: 'auto'
                                },
                                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.2rem' },
                                borderRadius: 5,
                                bgcolor: 'rgb(217, 22, 86)'
                            }}
                        >
                            Submit
                        </Button>
                    </Grid2>

                    {/* Right side: Contact Information */}
                    <Grid2 item xs={12} md={6} sx={{ ml: { sm: 0, md: 0, lg: 5 }, justifyContent: 'center', textAlign: 'justify', }}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.2rem', lg: '3.5rem', xl: '3rem' }, }}
                        >
                            Contact Info
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }}>
                            Address: 1234 Main St, Anytown, USA
                        </Typography>
                        <Typography>

                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }}>
                            Email Us: info@example.com
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }}>
                            Call Us: +1 234 567 8900
                        </Typography>

                        {/* Social Media Icons */}
                        <Box sx={{ mt: 10 }}>
                            <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' } }}>
                                Follow Us:
                            </Typography>
                            <Box>
                                <Facebook sx={{ mx: 1, fontSize: { xs: 24, sm: 30, md: 36 } }} />
                                <Twitter sx={{ mx: 1, fontSize: { xs: 24, sm: 30, md: 36 } }} />
                                <Instagram sx={{ mx: 1, fontSize: { xs: 24, sm: 30, md: 36 } }} />
                                <LinkedIn sx={{ mx: 1, fontSize: { xs: 24, sm: 30, md: 36 } }} />
                            </Box>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </ThemeProvider>
    );
}
