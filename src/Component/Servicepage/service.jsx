import React from 'react';
import { Box, Typography, Grid2, CardMedia, Card, CardContent } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import './service.css'

// SLIDE BANNER IMAGE'S //
const slideImages = [
    { src: '/Images/2151794718.jpg', alt: 'Slide 1' },
    { src: '/Images/1729674313467.jpg', alt: 'Slide 2' },
    { src: '/Images/daniela-cuevas-t7YycgAoVSw-unsplash.jpg', alt: 'Slide 3' },
    { src: '/Images/pexels-asadphoto-3601425-1.jpg', alt: 'Slide 4' },
];

// WATER //
const waterImages = [
    { src: '/imglist/man-4380804_1920.jpg', alt: 'Water Sports 1' },
    { src: '/imglist/water.jpg', alt: 'Water Sports 2' },
    { src: '/imglist/pexels-shndgd-27331207.jpg', alt: 'Water Sports 3' },
    { src: '/imglist/pexels-tobiasbjorkli-1819631.jpg', alt: 'Water Sports 4' },
];

// WINTER //
const winterImages = [
    { src: '/imglist/pexels-melvinwahlin-2433353.jpg', alt: 'Water Sports 1' },
    { src: '/imglist/pexels-ozgomz-868096.jpg', alt: 'Water Sports 2' },
    { src: '/imglist/pexels-sebastian-804573.jpg', alt: 'Water Sports 3' },
    { src: '/imglist/pexels-tinchosantini-20363962.jpg', alt: 'Water Sports 4' },
];

// CAMPING //
const campingImages = [
    { src: '/imglist/camping-day.jpg', alt: 'Water Sports 1' },
    { src: '/imglist/winter-camping.jpg', alt: 'Water Sports 2' },
    { src: '/imglist/campfire.jpg', alt: 'Water Sports 3' },
    { src: '/imglist/night-camp.jpg', alt: 'Water Sports 4' },
];

export default function ServicePage() {
    return (
        <Box sx={{ width: '100%', height: 'auto' }}>
            <Box>
                {/* Sliding Banner */}
                <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000}>
                    {slideImages.map((image, index) => (
                        <Box key={index} sx={{ position: 'relative' }}>
                            <CardMedia key={index}
                                component='img'
                                //    position='r'
                                src={image.src} alt={image.alt}
                                sx={{
                                    width: '100%', height: { xs: '12.5rem', sm: '18.75rem', md: '25rem', lg: '31.25rem', xl: '37.5rem' },
                                    objectFit: 'cover',
                                }}
                            />
                            <Typography variant="h2" sx={{
                                color: 'white', fontWeight: 'bold', textAlign: 'center', position: 'absolute',
                                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem', lg: '6rem', xl: '7.5rem' },
                                width: { xs: '18.5rem', sm: '25rem', md: '31.25rem', lg: '43.75rem', xl: '43.75rem' },
                                letterSpacing: 5,
                            }}>
                                Service
                            </Typography>
                        </Box>
                    ))}

                </Carousel>
            </Box>

            <Box sx={{ padding: 2, mt: 3 }}>
                <Typography sx={{
                    fontSize: { xs: '1.25rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' }, fontWeight: 'bold',
                    textAlign: 'center', justifyContent: 'center', className: 'typography-pjct firsttext',
                    marginBottom: { xs: '0.625rem', sm: '0.9375rem', md: '1.25rem' },
                }} >It's Time to Start Your Adventures </Typography>

                <Typography variant="body2" color="text.secondary"
                    sx={{
                        fontSize: { xs: '0.6rem', sm: '0.85rem', md: '1rem', lg: '1.15rem', xl: '1.25rem' },
                        mt: 1,
                        textAlign: 'center',
                        width: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '50%' },
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: { xs: '1.2', sm: '1.4', md: '1.6' },
                        padding: { xs: '0.5rem', sm: '0.75rem', md: '1rem' },
                    }}
                >
                    Dive into the thrill of new experiences, explore breathtaking landscapes,
                    challenge yourself on rugged trails, and create memories that last a lifetime.
                    Adventure awaits—begin your journey today!
                </Typography>

                {/* TWO IMAGES BOX */}
                <Box sx={{ width: "100%", height: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto', xl: 'auto', }, }}>

                    <Grid2 container spacing={2} sx={{ width: '100%', justifyContent: 'space-evenly', my: 4 }}>
                        {/* Left Card Media */}
                        <Grid2 item xs={12} sm={6} md={6}>
                            <Card sx={{ height: 'auto', width: { xs: '15.75rem', sm: '18.75rem', md: '25rem', lg: '31.25rem', xl: '37.5rem' }, }}>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="/Images/pexels-wildlittlethingsphoto-697244.jpg"
                                    alt="Family Hiking Trips"
                                    sx={{ objectFit: 'cover', height: { xs: '200px', sm: '300px' } }}
                                />
                                <CardContent sx={{}}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.6rem', xl: '1.8rem', }, textAlign: 'center',

                                        }}
                                    >
                                        Family Hiking Trips
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontSize: { xs: '0.6rem', sm: '0.85rem', md: '1rem', lg: '1rem', xl: '1rem', },
                                            color: 'black', mt: 1, textAlign: 'left'
                                        }}
                                    >
                                        Enjoy unforgettable moments with family, exploring scenic trails,
                                        discovering wildlife, and creating cherished memories together.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid2>

                        {/* Right Card Media */}
                        <Grid2 item xs={12} sm={6} md={6}>
                            <Card sx={{ height: 'auto', width: { xs: '15.75rem', sm: '18.75rem', md: '25rem', lg: '31.25rem', xl: '37.5rem' } }}>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="/Images/bagpacking.jpg"
                                    alt="Backpacking Trips"
                                    sx={{ objectFit: 'cover', height: { xs: '200px', sm: '300px' } }}
                                />
                                <CardContent sx={{}}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.6rem', xl: '1.8rem', }, textAlign: 'center',
                                        }}
                                    >
                                        Backpacking Trips
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontSize: { xs: '0.6rem', sm: '0.85rem', md: '1rem', lg: '1rem', xl: '1rem', },
                                            color: 'black', mt: 1, textAlign: 'left'
                                        }}
                                    >
                                        Embark on adventurous journeys through rugged trails,
                                        immersing yourself in nature's beauty and serenity along the way.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2>
                </Box>
                {/* First Main Content */}
                <Grid2 container spacing={2} sx={{ padding: { xs: '0.625rem', sm: '0.9375rem', md: '1.25rem', lg: '1.875rem', xl: '2.5rem' }, justifyContent: 'center', }}>
                    {/* Left Section */}
                    <Grid2 xs={12} md={6}>
                        <Typography variant="h4" className='typography-pjct tp1' sx={{
                            mt: 3,
                            marginBottom: { xs: '0.625rem', sm: '0.9375rem', md: '1.25rem' },
                            textAlign: 'left', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' }
                        }}>
                            Water Sports
                        </Typography>
                        <Typography sx={{
                            textAlign: 'left', marginBottom: { xs: '0.625rem', sm: '0.9375rem', md: '1.25rem' }, mt: 3,
                        }}>
                            Experience thrilling water sports adventures, from surfing to kayaking,
                            for an unforgettable aquatic excitement and fun.
                        </Typography>

                        {/* Images Section */}

                        <Grid2 container spacing={2} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
                            {waterImages.map((image, index) => (
                                <Grid2 key={index} item xs={12} sm={6} md={6} >
                                    <Box
                                        component="img"
                                        src={image.src}
                                        alt={image.alt}
                                        sx={{ width: '100%', height: { xs: '9.375rem', sm: '12.5rem', md: '15.625rem', lg: '20.75rem', xl: '24.875rem' }, objectFit: 'cover', borderRadius: '8px', }}
                                    />
                                </Grid2>
                            ))}
                        </Grid2>

                    </Grid2>
                </Grid2>

                {/* SECOND CONTENT */}
                <Grid2 container spacing={2} sx={{ padding: { xs: '0.625rem', sm: '0.9375rem', md: '1.25rem', lg: '1.875rem', xl: '2.5rem' }, justifyContent: 'center', }}>
                    {/* Left Section */}
                    <Grid2 xs={12} md={6}>
                        <Typography variant="h4" className='typography-pjct tp2' sx={{
                            textAlign: 'left', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' }
                        }}>
                            Winter Sports
                        </Typography>

                        <Typography sx={{
                            textAlign: 'left', marginBottom: { xs: '0.625rem', sm: '0.9375rem', md: '1.25rem' }, mt: 3,
                        }}>
                            Enjoy exhilarating winter sports, from skiing to snowboarding,
                            amidst breathtaking snowy landscapes and icy terrains.
                        </Typography>

                        {/* Images Section */}
                        <Grid2 container spacing={2} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' } }}>
                            {winterImages.map((image, index) => (
                                <Grid2 key={index} item xs={12} sm={6} md={6}>
                                    <Box
                                        component="img"
                                        src={image.src}
                                        alt={image.alt}
                                        sx={{ width: '100%', height: { xs: '9.375rem', sm: '12.5rem', md: '15.625rem', lg: '20.75rem', xl: '21.875rem' }, objectFit: 'cover', borderRadius: '8px', }}
                                    />
                                </Grid2>
                            ))}
                        </Grid2>

                    </Grid2>
                </Grid2>
                {/* THIRED CONTENT */}
                <Grid2 container spacing={2} sx={{ padding: { xs: '0.625rem', sm: '0.9375rem', md: '1.25rem', lg: '1.875rem', xl: '2.5rem' }, justifyContent: 'center', }}>
                    {/* Left Section */}
                    <Grid2 xs={12} md={6}>
                        <Typography variant="h4" className='typography-pjct tp3'
                            sx={{
                                marginBottom: { xs: '0.625rem', sm: '0.9375rem', md: '1.25rem' },
                                textAlign: 'left', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' }
                            }}>
                            Camping
                        </Typography>
                        <Typography sx={{
                            textAlign: 'left', marginBottom: { xs: '0.625rem', sm: '0.9375rem', md: '1.25rem' },
                            mt: 3,
                        }}>
                            Discover the great outdoors with camping, blending adventure, nature,
                            and relaxation in peaceful, scenic surroundings.
                        </Typography>
                        {/* Images Section */}

                        <Grid2 container spacing={2} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' } }}>
                            {campingImages.map((image, index) => (
                                <Grid2 key={index} item xs={12} sm={6} md={6}>
                                    <Box
                                        component="img"
                                        src={image.src}
                                        alt={image.alt}
                                        sx={{ width: '100%', height: { xs: '9.375rem', sm: '12.5rem', md: '15.625rem', lg: '20.75rem', xl: '21.875rem' }, objectFit: 'cover', borderRadius: '8px', }}
                                    />
                                </Grid2>
                            ))}
                        </Grid2>

                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    );
}
