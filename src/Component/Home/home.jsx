import { Box, Button, Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './home.css'
import { createTheme, ThemeProvider } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

// FONT STYLE //
const theme = createTheme({
  typography: { fontFamily: 'Poppins, Arial, sans-serif', }
})

// 
const itemData = [
  {
    img: '/imglist/pexels-pack2ride-85580365-8934524.jpg',
    title: 'Cycling Mountain Bike',
    // author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/imglist/go-montgenevre-RFm48b7gdEM-unsplash.jpg',
    title: 'Snow Boarding',
    // author: '@rollelflex_graphy726',
  },
  {
    img: '/imglist/pexels-sanmane-1365425.jpg',
    title: 'Mountain Hiking',
    // author: '@helloimnik',
  },
  {
    img: '/imglist/canoe-7541311_1920.jpg',
    title: 'Boating Lake',
    // author: '@nolanissac',
    cols: 2,
  },
  {
    img: '/imglist/pexels-quang-nguyen-vinh-222549-3232533.jpg',
    title: 'Camping',
    // author: '@nolanissac',
    cols: 2,
  },
  {
    img: '/imglist/pexels-obviouslyarthur-10066095.jpg',
    title: ' Campfire',
    // author: '@nolanissac',
    cols: 2,
  },

];


export default function Home() {

  const themes = useTheme();

  // Determine the number of columns based on screen size //
  const isXs = useMediaQuery(themes.breakpoints.down('sm'));
  const isSm = useMediaQuery(themes.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(themes.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(themes.breakpoints.between('lg', 'xl'));
  const isXl = useMediaQuery(themes.breakpoints.up('xl'));

  // Dynamically set the column count based on screen size //
  let cols = 1;
  if (isSm) cols = 1;
  else if (isMd) cols = 2;
  else if (isLg) cols = 2;
  else if (isXl) cols = 2;


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: 'auto' }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: { xs: '40vh', sm: '70vh', md: '80vh', lg: '90vh', xl: '100vh' },
          width: '100%',
          backgroundImage: {
            xs: 'url(/Images/robert-bye-JvUVo08dndQ-unsplash-1.jpg)',
            sm: 'url(/Images/robert-bye-JvUVo08dndQ-unsplash-1.jpg)',
            md: 'url(/Images/robert-bye-JvUVo08dndQ-unsplash-1.jpg)',
            lg: 'url(/Images/robert-bye-JvUVo08dndQ-unsplash-1.jpg)',
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }}>

          <Typography variant="h3" className="maintext"
            sx={{
              mt: { xs: 1, sm: 1, md: 0, lg: 1, xl: 3 },
              ml: { xs: 2, sm: 6, md: 10, lg: 12, xl: 10 },
              fontWeight: 'bold', color: 'rgb(254, 254, 254)', px: 0, py: 0,
              fontSize: { xs: '1.75rem', sm: '3rem', md: '4rem', lg: '5rem', xl: '8.5rem', },
              borderRadius: '4px',
              //  fontFamily:'Mystery Quest',
              letterSpacing: 3,

            }}
          >A WONDERFUL ADVENTURE</Typography>

          <Typography className="text2" sx={{
            fontWeight: 'bold', fontFamily: 'Playwrite GB S',
            mt: { xs: 1, sm: 3, md: 1, lg: 2, xl: 2 },
            ml: { xs: 7, sm: 13, md: 13, lg: 15, xl: 14 },
            fontSize: { xs: '1rem', sm: '1.75rem', md: '1.8rem', lg: '2.5rem', xl: '3.5rem' },
            color: 'rgb(254, 254, 254)',
            letterSpacing: 0,
            textAlign: 'left'
          }}>Explore the New World</Typography>

        </Box>

        {/*Text and Image List Section inside Grid2 */}
        <Box sx={{
          padding: '1.25rem', display: "flex", justifyContent: 'space-evenly', mt: 3,
          flexDirection: {
            xs: 'column',
            md: 'row',
            lg: 'row',
            xl: 'row'
          },
        }}>
          {/* Left Section for Text */}
          <Grid2
            xs={12}
            md={6}
            sx={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              alignItems: { xs: 'center', sm: 'center', lg: 'normal', xl: 'normal' }, textAlign: 'left', ml: { sm: 0, md: 2, }
            }}
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
                  sm: '23rem',
                  md: '22rem',
                },
              }}
            >
              Upcoming Tours & Destination
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: '1.25rem',
                width: {
                  xs: '18rem',
                  sm: '23rem',
                  md: '22rem',
                  lg: '30rem'
                },
                fontSize: {
                  xs: '0.865rem',
                  sm: '1rem',
                  md: '1.125rem',
                }
              }}
            >
              Join us for thrilling adventures across breathtaking landscapes!
              From majestic mountains to serene beaches, our upcoming tours offer
              unforgettable experiences designed to connect you with nature and fellow adventurers.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ff3366',
                color: '#fff',
                width: {
                  xs: '120px',
                  sm: '130px',
                  md: '150px',
                },
                fontSize: {
                  xs: '0.75rem',
                  sm: '0.875rem',
                  md: '1rem',
                }
              }}
            >
              Learn More
            </Button>
          </Grid2>


          <Box sx={{ p: 1, }}>
            <Grid2 container spacing={3} sx={{
              width: '100%', justifyContent: 'center', alignItems: "center",
            }} >
              <Grid2 xs={12} md={8} display="flex" justifyContent="center" >
                <ImageList
                  cols={cols}
                  sx={{
                    width: '100%',

                  }}

                  gap={16}
                // gap={2}
                >
                  {itemData.map((item, index) => (
                    <ImageListItem key={index}>
                      <CardMedia
                        component='img'
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                          borderRadius: '8px',
                          width: '100%',
                          height: '15.75rem',

                          maxHeight: {
                            xs: '9.375rem',
                            sm: '12.5rem',
                            md: '15.625rem',
                            lg: '18.75rem',
                            xl: '21.875rem',
                          },
                          objectFit: 'cover',

                        }}
                      />
                      <ImageListItemBar

                        title={<Typography
                          variant="h6"
                          sx={{
                            fontSize: {
                              xs: '0.75rem',
                              sm: '1rem',
                              md: '1.25rem',
                              lg: '1.25rem',
                              xl: '1.5rem',
                            },
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                          }}
                        >
                          {item.title}
                        </Typography>}
                        subtitle={item.author}

                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
        {/* EVENT  */}
        <Box sx={{ width: "100%", height: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto', xl: 'auto', }, }}>
          <Typography
            variant="h4"
            gutterBottom
            className="upcoming"
            sx={{
              fontSize: {
                xs: '1.5rem',
                sm: '2rem',
                md: '2.5rem',
                lg: '3rem',
                xl: '3.5rem',
              },
              textAlign: 'center',
              width: '100%',

            }}
          >
            Upcoming Events
          </Typography>
          <Grid2 container spacing={2} sx={{ width: '100%', justifyContent: 'space-evenly', my: 6 }}>
            {/* Left Card Media */}
            <Grid2 item xs={12} sm={6} md={6}>
              <Card sx={{ height: 'auto', width: { xs: '300px', sm: '600px', md: '400px', lg: '400px', xl: '600px' }, }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/Images/pexels-darina-belonogova-9159898.jpg"
                  alt="Everest Camp Trek"
                  sx={{ objectFit: 'cover', height: { xs: '200px', sm: '300px' } }}
                />
                <CardContent sx={{ textAlign: 'justify' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: {
                        xs: '1rem',
                        sm: '1.2rem',
                        md: '1.4rem',
                        lg: '1.6rem',
                        xl: '1.8rem',
                      },
                    }}
                  >
                    Everest Camp Trek
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: {
                        xs: '0.6rem',
                        sm: '0.85rem',
                        md: '1rem',
                        lg: '1rem',
                        xl: '1.2rem',
                      },
                    }}
                  >
                    Join us on the unforgettable Everest Camp Trek, where breathtaking views,
                    challenging trails, and rich Sherpa culture await every adventurer.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>

            {/* Right Card Media */}
            <Grid2 item xs={12} sm={6} md={6}>
              <Card sx={{ height: 'auto', width: { xs: '300px', sm: '600px', md: '400px', lg: '400px', xl: '600px' } }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image="/Images/pexels-alin-serban-1867310-19336798.jpg"
                  alt="Event 2"
                  sx={{ objectFit: 'cover', height: { xs: '200px', sm: '300px' } }}
                />
                <CardContent sx={{ textAlign: 'justify' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: {
                        xs: '1rem',
                        sm: '1.2rem',
                        md: '1.4rem',
                        lg: '1.6rem',
                        xl: '1.8rem',
                      },
                    }}
                  >
                    Walking Holidays
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: {
                        xs: '0.6rem',
                        sm: '0.85rem',
                        md: '1rem',
                        lg: '1rem',
                        xl: '1.2rem',
                      },
                    }}
                  >
                    Experience the joy of nature with our walking holidays, featuring scenic trails,
                    guided tours, and opportunities to connect with fellow adventurers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </ThemeProvider>
  )
}