import { Box, CardMedia, Grid2, Paper, Typography, } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material';
import './about.css';

// FONT STYLE //
const theme = createTheme({
    typography: { fontFamily: 'Poppins, Arial, sans-serif' }
})

// SINGLE IMAGE //
const item = {
    name: "Who We Are?",
    imgPath: "/Images/2151794718.jpg"
};

export default function About() {

    return (

        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%', height: "auto" }}>
                {/* Displaying a static image with text */}
                <Paper sx={{
                    position: 'relative',
                    height: {
                        xs: '12.5rem', sm: '18.75rem', md: '25rem', lg: '34.39rem', xl: '37.5rem',
                    },
                }}>
                    {/* Static Background Image */}
                    <CardMedia
                        component="img"
                        src={item.imgPath}
                        alt={item.name}
                        sx={{
                            width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center',
                        }}
                    />

                    {/* Overlay Text */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#fff',
                            textAlign: 'center',
                            borderRadius: '8px',
                            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '50%', },
                            padding: { xs: '1rem', md: '2rem' },
                        }}
                    >
                        <Typography variant="h2"
                            sx={{
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '4rem', xl: '4rem' },
                                fontWeight: 'bold',
                                mb: 2,
                            }}
                        >
                            {item.name}
                        </Typography>
                        <Typography variant="body1"
                            sx={{
                                width: { xs: '18.75rem', sm: '25rem', md: '31.25rem', lg: '37.25rem', xl: '43.75rem' },
                                fontSize: { xs: '0.5rem', sm: '0.625rem', md: '0.8125rem', lg: '1rem', xl: '1.5rem' },
                            }}>
                            {item.description}
                        </Typography>
                    </Box>
                </Paper>
                <Typography variant="h2" align="center" gutterBottom className='typography'
                    sx={{
                        mt: 3, fontSize: { xs: '2.5rem', sm: '2.5rem', md: '3.5rem', lg: '3.5rem', xl: '4rem' },
                    }}>
                    About Us
                </Typography>
                {/*Text and Image List Section inside Grid2 */}
                <Box sx={{
                    position: "relative",
                    padding: '1.25rem', display: "flex", justifyContent: 'space-around', mt: 4,
                    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
                }}>
                    {/* Left Section for Text */}
                    <Grid2
                        xs={12}
                        md={6}
                        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '1.25rem',
                                fontSize: {
                                    xs: '2rem',
                                    sm: '2.5rem',
                                    md: '3rem',
                                    lg: '3.5rem',
                                },
                                width: {
                                    xs: '18rem',
                                    sm: '22rem',
                                    md: '24rem',
                                },
                            }}
                        >
                            Our MissioN
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                marginBottom: '1.25rem',
                                width: {
                                    xs: '18rem',
                                    sm: '20rem',
                                    md: '24.25rem',
                                },
                                fontSize: {
                                    xs: '0.875rem',
                                    sm: '1rem',
                                    md: '1.125rem',
                                },
                                textAlign: 'justify'
                            }}
                        >
                            Our mission is to inspire a sense of adventure in every individual.
                            We aim to foster a love for the outdoors, encourage exploration,
                            and promote environmental stewardship. Through our guided experiences,
                            we strive to create lasting memories and meaningful connections with nature,
                            igniting a passion for adventure in all.
                        </Typography>

                    </Grid2>

                    {/* Right Section for Images */}
                    <Grid2
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <CardMedia
                            component="img"
                            src="/Images/image-1.jpg"
                            alt="Our Mission"
                            sx={{
                                borderRadius: '8px',
                                width: {
                                    xs: '100%',
                                    sm: '100%',
                                    md: '70%',
                                    lg: '90%',
                                    xl: '80%',
                                },
                                height: {
                                    xs: 'auto',
                                    sm: 'auto',
                                    md: 'auto',
                                    lg: '500px',
                                    xl: '600px',
                                },
                                objectFit: 'cover',
                            }}
                        />
                    </Grid2>
                </Box>

                {/* SECOND ROW - (BOX) */}

                <Box sx={{
                    position: "relative", padding: '1.25rem', display: "flex", justifyContent: 'space-evenly',
                    mt: 4, flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
                }}>

                    {/* Right Section for Images */}
                    <Grid2 xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CardMedia
                            component="img"
                            src="/Images/gaurav-k-CV7KPRM6fHc-unsplash.jpg"
                            alt="Our Mission"
                            sx={{
                                borderRadius: '8px',
                                width: { xs: '100%', sm: '100%', md: '70%', lg: '100%', xl: '100%', },
                                height: { xs: 'auto', sm: 'auto', md: 'auto', lg: '500px', xl: '600px', },
                                objectFit: 'cover',
                            }} />
                    </Grid2>
                    {/* Left Section for Text */}
                    <Grid2
                        xs={12}
                        md={6}
                        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'justify' }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold', mt: 2,
                                marginBottom: '1.25rem',
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', },
                                width: {
                                    xs: '18rem',
                                    sm: '22rem',
                                    md: '24rem',
                                }, textAlign: 'center'
                            }}
                        >
                            Adventure Philosophy
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                marginBottom: '1.25rem',
                                width: {
                                    xs: '18rem',
                                    sm: '20rem',
                                    md: '24.25rem',
                                },
                                fontSize: {
                                    xs: '0.875rem',
                                    sm: '1rem',
                                    md: '1.125rem',
                                }
                            }}
                        >
                            Adventure is not solely about the destination; it’s a journey filled with exploration,
                            growth, and connection. We believe that every experience, whether challenging or joyful,
                            enriches our lives. Embracing spontaneity and pushing beyond comfort zones helps us
                            discover the beauty of nature and the strength within ourselves.

                        </Typography>

                    </Grid2>
                </Box>

                {/* THIRD ROW - (BOX) */}

                <Box sx={{
                    position: "relative", padding: '1.25rem', display: "flex", justifyContent: 'space-around',
                    mt: 4, flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' },
                    alignItems: 'center'
                }}>

                    {/* Left Section for Text */}
                    <Grid2 xs={12} md={6}
                        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'justify' }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold', marginBottom: '1.25rem',
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', },
                                width: { xs: '18rem', sm: '22rem', md: '24rem', }, textAlign: 'center'
                            }} >
                            Extraordinary Experiences
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                marginBottom: '1.25rem',
                                width: {
                                    xs: '18rem',
                                    sm: '20rem',
                                    md: '24.25rem',
                                },
                                fontSize: {
                                    xs: '0.875rem',
                                    sm: '1rem',
                                    md: '1.125rem',
                                }
                            }}
                        >
                            Extraordinary experiences are what we strive to create.
                            From breathtaking landscapes to heart-pounding activities,
                            each adventure is crafted to provide unforgettable moments.
                            Our focus is on enhancing your connection to nature, promoting
                            personal growth, and building lasting friendships. Join us as
                            we explore the world together, one adventure at a time.
                        </Typography>

                    </Grid2>
                    {/* Right Section for Text */}
                    <Grid2 xs={12} md={6}
                        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold', marginBottom: '1.25rem', textAlign: 'center',
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', },
                                width: { xs: '18rem', sm: '22rem', md: '24rem', lg: '26rem' },
                            }} >
                            Our Core Values
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                marginBottom: '1.25rem',
                                width: {
                                    xs: '18rem',
                                    sm: '20rem',
                                    md: '24.25rem',
                                },
                                fontSize: {
                                    xs: '0.875rem',
                                    sm: '1rem',
                                    md: '1.125rem',
                                }
                            }}
                        >
                            Our core values are the foundation of our community. We prioritize sustainability,
                            ensuring our adventures have a minimal environmental impact. Inclusivity is essential,
                            welcoming adventurers from all backgrounds. Safety is our top concern, providing secure experiences.
                            Lastly, we emphasize community building, fostering connections and shared experiences that enrich our lives.
                        </Typography>

                    </Grid2>

                </Box>



            </Box>
        </ThemeProvider>
    )
}




