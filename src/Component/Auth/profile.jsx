import * as React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { profiledatafetch } from '../../Redux/profileSlice';
import { profileImagePath } from '../../Api/axiosinstance';
import { createTheme, ThemeProvider } from '@mui/material';

// FONT STYLE //
const theme = createTheme({
    typography: { fontFamily: 'Poppins, Arial, sans-serif' }
})

export default function Profile() {
    const { profileDetails, isLoading, isError } = useSelector((state) => state.profileKey);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(profiledatafetch());
    }, [dispatch]);

    if (!profileDetails && !isLoading) {
        return (
            <Box sx={{
                p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                height: { xs: '100vh', sm: '85vh', md: '80vh', lg: '83vh', xl: '90vh' },
            }}>
                <Typography variant='h5' color='error'
                    sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem', lg: '1.125rem', xl: '1.25rem' } }}>
                    No profile details available. Please Login
                </Typography>
            </Box>
        )
    }
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                width: '100%',
                height: { xs: '80vh', sm: '85vh', md: '95vh', lg: '95vh', xl: '100vh' },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: 'url(/Images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'center',
                    maxWidth: { xs: '90%', sm: '80%', md: '60%', lg: '50%', xl: '40%' },
                    p: 3,
                    mx:2,
                    color: 'white',
                    border:'3px solid white',
                    maxHeight:'auto'
                }}>
                    <CardMedia
                        component="img"
                        src={profileDetails?.profile_pic ? profileImagePath(profileDetails.profile_pic) : 'error'}
                        alt="Profile"
                        sx={{
                            width: { xs: '80%', sm: '65%', md: '70%', lg: '70%', xl: '50%' },
                            height: 'auto',
                            objectFit: 'cover',
                            borderRadius: 1,
                            mb: 3,
                        }}
                    />
                    <CardContent sx={{ width:{md:'90%',lg:'100%',xl:'100%'},
                   justifyContent:'center',alignItems:'center',
                    textAlign: 'center',
                    //  ml: { xs: 0, sm: 0, md: 16, lg: 17, xl: 18 }
                      }}>
                        {isLoading && <Typography>Loading...</Typography>}
                        {isError && <Typography>Error fetching profile details.</Typography>}
                        {!isLoading && !isError && profileDetails && (
                            <>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: { xs: '1.5rem', sm: '2.5rem', md: '2rem', lg: '2.75rem', xl: '2rem' },
                                        fontWeight: 500,
                                        // fontFamily: 'Tangerine',
                                        fontFamily: 'poppins',
                                        mb: 1,
                                    }}
                                >
                                 {profileDetails.first_name} {profileDetails.last_name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem', lg: '2.55rem', xl: '2.75rem' },
                                        fontWeight: '500',
                                        // fontFamily: "Tangerine",
                                        fontFamily: 'poppins',
                                        color:'white',
                                        textAlign:'center'

                                    }}
                                >
                                  {profileDetails.email}  
                                </Typography>
                            </>
                        )}
                    </CardContent>
                </Box>
            </Box>
        </ThemeProvider>
    )
}