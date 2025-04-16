import * as React from 'react';
import { Box, Grid2, Card, TextField, Button, Typography, CardMedia, CircularProgress } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useForm } from 'react-hook-form';
import { addImages } from '../../Redux/crudSlice';
import { useState } from 'react';
import { useDispatch, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material';
import { useSnackbar } from 'notistack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function CreateProduct() {

    const { enqueueSnackbar } = useSnackbar();

    // FONT STYLE //
    const theme = createTheme({
        typography: { fontFamily: 'Poppins, Arial, sans-serif' }
    })

    const dispatch = useDispatch();
    const naviget = useNavigate();

    // STATE VERIABLE //
    const { register, handleSubmit, formState: { errors } } = useForm();

    // IMAGE //
    const [image, setImg] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    // LOADING // 
    const [loading, setLoading] = useState(false);

    //SUBMIT FORM //
    const onSubmit = (data) => {
        console.log('Form data', data);
        console.log("image", image);

        const trimmedTitle = data.title.trim();
        const trimmedDescription = data.description.trim();

        if (!trimmedTitle || !trimmedDescription) {
            enqueueSnackbar('Title and Description cannot be empty or just spaces.', { variant: 'error' });
            return; // Stop the form submission
        }

        if(!image){
            enqueueSnackbar('Please upload an image.', { variant: 'error' });
            return;
        }
        
        let formData = new FormData();
        // formData.append("title", data.title);
        // formData.append('description', data.description);
        formData.append("title", trimmedTitle);
        formData.append('description', trimmedDescription);
        formData.append('image', image);
        setLoading(true);

        dispatch(addImages(formData)).then(() => {
            enqueueSnackbar('Product Create successfully', { variant: 'success' });
            setTimeout(() => {
                window.location.reload();
            }, 5000)
            naviget('/list')
        }).catch(() => {
            console.error("Error submitting form");
        })

    }

    // IMAGE SET - SUBMIT //
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validImagettype = ['image/jpeg', 'image/png', 'image/webp'];
            if (validImagettype.includes(file.type)) {
                setImg(file);
                setImagePreview(URL.createObjectURL(file));
            } else {
                enqueueSnackbar('Please select a valid image file (JPEG, PNG, or JPG).', { variant: 'error' });
            }
        }

    };


    return (
        <ThemeProvider theme={theme}>
            {loading && (
                <Box sx={{ width: '100%', position: 'relative', top: '10%' }}>
                    <LinearProgress />
                </Box>
            )}
            <Box component="section" sx={{
                p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center',
                height: { xs: 'auto', sm: 'auto', md: 'S', lg: '100vh', xl: '100vh' },
                position: 'relative',
                backgroundImage: {
                    xs: 'url(/Images/2400-items-on-black-table-background-design-of-random-objects-on-table.jpg)',
                    sm: 'url(/Images/2400-items-on-black-table-background-design-of-random-objects-on-table.jpg)',
                    md: 'url(/Images/2400-items-on-black-table-background-design-of-random-objects-on-table.jpg)',
                    lg: 'url/Images/2400-items-on-black-table-background-design-of-random-objects-on-table.jpg)',
                    xl: 'url(/Images/2400-items-on-black-table-background-design-of-random-objects-on-table.jpg)'
                },
                backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            }}>

                <Card component='form' onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        bgcolor: 'transparent', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: 5,
                        width: { xs: '90%', sm: '80%', md: '60%', lg: '55%', xl: '50%' },
                        height: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto', xl: 'auto' },
                        // maxWidth: '100%', maxHeight: 'auto',


                    }}
                >
                    <Typography variant='h3'
                        sx={{
                            color: 'white',
                            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem', xl: '2.25rem' },
                            fontWeight: { xs: 400, sm: 500, md: 600, lg: 700, xl: 800 },
                        }}>Product Create</Typography>

                    {/* Grid2 inside the Card */}
                    <Grid2 container spacing={2} sx={{ display: 'flex', flexDirection: 'column', }}>
                        <Grid2 item xs={12}>
                            {/* Title Input */}
                            <TextField
                                fullWidth
                                label="Title"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                size="small"
                                className="textFieldContainer textFieldInput textFieldLabel"
                                error={!!errors.title}
                                helperText={errors.title?.message}

                                {...register('title', { required: 'enter title' })}
                                sx={{
                                    "& .MuiInputLabel-root": {
                                        color: "white",
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: "white",
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        color: "white",
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "lightgray",
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "white",
                                        },
                                    },
                                }}
                            />
                        </Grid2>

                        <Grid2 item xs={12}>
                            {/* Description Input */}
                            <TextField
                                fullWidth
                                label="Description"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                size="small"
                                multiline
                                rows={4}
                                className="textFieldContainer textFieldInput textFieldLabel"
                                error={!!errors.description}
                                helperText={errors.description?.message}

                                {...register('description', { required: 'enter description' })}

                                sx={{
                                    "& .MuiInputLabel-root": {
                                        color: "white",
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: "white",
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        color: "white",
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "lightgray",
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "white",
                                        },
                                    },
                                }}
                            />
                        </Grid2>
                        {/* Right Side: Image Preview */}
                        <Grid2 item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                            {imagePreview && (
                                <CardMedia
                                    component="img"
                                    height="100"
                                    width='100'
                                    image={imagePreview}
                                    alt="Selected Image Preview"
                                    sx={{
                                        width: {
                                            xs: '100%',
                                            sm: '100%',
                                            md: '75%',
                                            lg: '60%',
                                            xl: '50%',
                                        },
                                        height: 'auto',
                                        maxHeight: {
                                            xs: '12.5rem',
                                            md: '18.75rem',
                                            lg: '25rem'
                                        },
                                        borderRadius: '0.25rem',
                                        objectFit: 'cover'
                                    }}

                                />
                            )}
                        </Grid2>
                        <Grid2 item xs={12}>
                            {/* Image Upload Input */}
                            <Button
                                variant="contained"
                                component="label"
                                startIcon={image ? <CheckCircleIcon color='inherit' /> : <UploadFileIcon color='inherit' />}
                            >{image ? 'Uploaded successfully' : 'Upload Image'}
                                {/* Upload Image */}
                                <input
                                    hidden
                                    type="file"
                                    hiden
                                    accept="image/*"
                                    onChange={handleImageChange}
                                   
                                />

                            </Button>

                        </Grid2>

                        <Grid2 item xs={12}>
                            {/* Submit Button */}
                            <Button variant='contained' type='submit'
                                sx={{
                                    bgcolor: 'rgb(239, 83, 80)',
                                    mt: 1, width: { xs: '40%', sm: '40%', md: '40%', lg: '30%', xl: '20%', }
                                }}>
                                {
                                    loading ? <CircularProgress size={30} color='inherit' /> : 'Submit'
                                }</Button>
                        </Grid2>
                    </Grid2>
                </Card>
            </Box>
        </ThemeProvider>
    )
}
