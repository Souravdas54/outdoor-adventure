import React from 'react';
import { Box, Grid, Typography, IconButton, CardMedia, } from '@mui/material';

import { Email, LocationOn, Phone, Facebook, Twitter, LinkedIn, Instagram, } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const footerPages = [
  { name: "Home", path: '/' }, { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }, { name: 'Service', path: '/service' },
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'grey.900', color: 'grey.100', py: { xs: 4, md: 6 }, justifyContent: 'space-around', alignItems: 'center', maxWidth: '100%', overflow: 'hidden', }}>
      <Grid container spacing={3} justifyContent="center" sx={{ pl: { xs: 0, sm: 0, md: 2, lg: 2 } }}>
        {/* Logo and About Section */}
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ pl: { xs: 0, md: 1 } }}>
          <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <CardMedia
                component="img"
                src="/logo/icons8-hiking-100.png"
                sx={{
                  width: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                  height: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                  mb: 0,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  width: { xs: '10.5rem', sm: '10.5m', md: '12.5rem' },
                  fontWeight: 'bold',
                  mt: 2, textAlign: 'justify',
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' },
                }}
              >
                OUTDOOR ADVENTURE
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                mb: 2, mt: 2,
                px: { xs: 5, sm: 5 },
                textAlign: 'justify',
              }}
            >
              Experience the thrill of outdoor adventure! From mountain hikes to river rafting, nature offers endless opportunities for excitement and exploration. Embrace the wild, breathe fresh air, and reconnect with nature.
            </Typography>
          </Box>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center" sx={{ mt: { xs: 1, sm: 2, md: 4, lg: 1, xl: 1 }, pl: { xs: 0, md: 1 }, }}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Contact
            </Typography>
            <Box mt={1}>
              <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                <LocationOn />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>1234 Main St, Anytown, USA</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                <Phone />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>+1 234 567 8900</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                <Email />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>info@example.com</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Services Section */}
        <Grid item xs={12} sm={6} md={2} sx={{ pl: { xs: 0, md: 1 } }}>
          <Box textAlign="center">
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Services
            </Typography>
            <Box mt={1}>
              {footerPages.map((text) => (
                <Link to={footerPages.path} key={footerPages.path} underline="none" style={{ colorL: 'white', textDecoration: 'none', }}>
                  <Typography variant="body2" sx={{
                    color: 'white',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    '&:hover': { color: 'lightgray' }
                  }}>
                    {text.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={2} sx={{ pl: { xs: 0, md: 1 } }}>
          <Box textAlign="center">
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 1 }}>
              Follow us
            </Typography>
            <Box display="flex" justifyContent="center" gap={1} flexWrap="wrap">
              {[Facebook, Twitter, Instagram, LinkedIn,].map((Icon, index) => (
                <IconButton
                  key={index}
                  aria-label={Icon.name}
                  color="inherit"
                  sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

