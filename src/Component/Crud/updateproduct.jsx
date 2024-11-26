import * as React from 'react';
import { Box, TextField, Card, CardMedia, Typography, Button, Grid2, CardContent, CircularProgress, } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import UndoSharpIcon from '@mui/icons-material/UndoSharp';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './crud.css'
import { editProductData, editProductList } from '../../Redux/crudSlice';
import { createTheme, ThemeProvider } from '@mui/material';

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// FONT STYLE //
const theme = createTheme({
  typography: { fontFamily: 'Poppins, Arial, sans-serif' }
})

export default function Updateproduct() {
  const { editList, } = useSelector(state => state.crudKey);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState(null);

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, setValue, watch } = useForm();
  const watchImage = watch('image');
  const newImage = watchImage && watchImage[0] ? URL.createObjectURL(watchImage[0]) : null;


  useEffect(() => {
    dispatch(editProductList(id))
  }, [id, dispatch])

  useEffect(() => {
    if (editList !== null) {
      setValue('title', editList.title);
      setValue('description', editList.description);
      setImagePreview(`https://wtsacademy.dedicateddevelopers.us/uploads/product/${editList.image}` || '');
    }

  }, [setValue, editList])

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('title', data.title);
    formData.append('description', data.description);
    // formData.append('image', data.image[0]);

    if (data.image[0]) {
      formData.append('image', data.image[0]);
    }
    setLoading(true)
    dispatch(editProductData(formData)).then(() => {
      toast.success("Update Successfuly", {
        position: 'top-center',
      });
      setTimeout(() => {
        // window.location.reload();
        navigate('/list');

      }, 5000)
    }).catch(() => {
      toast.error("Update Failed", {
        position: 'top-center',
      });
    })
  }


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%' },
        height: { xs: 'auto', md: '100vh', lg: '100vh', xl: '100vh' },
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', position: 'relative',
        backgroundImage: {
          xs: 'url(/Images/vecteezy_items-on-blue-table-background-design-of-random-objects-on_46256440.jpg)',
          sm: 'url(/Images/vecteezy_items-on-blue-table-background-design-of-random-objects-on_46256440.jpg)',
          md: 'url(/Images/vecteezy_items-on-blue-table-background-design-of-random-objects-on_46256440.jpg)',
          lg: 'url(/Images/vecteezy_items-on-blue-table-background-design-of-random-objects-on_46256440.jpg)',
          xl: 'url(/Images/vecteezy_items-on-blue-table-background-design-of-random-objects-on_46256440.jpg)'
        },
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
      }}>
        <Typography variant="h3" gutterBottom
          sx={{
            fontWeight: { xs: 600, sm: 600, md: 600, lg: 700, xl: 800 }, color: 'black',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
            mt: { xs: 3, sm: 2 }
          }}>
          Update Product
        </Typography>

        {/* Responsive card inside a box */}
        <Card sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row', lg: 'row' },
          p: 2, justifyContent: 'center', alignItems: 'center',
          width: { xs: '80%', sm: '70%', md: '80%', lg: '60%', xl: '80%' },
          height: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto', xl: 'auto' },
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'transparent',
          mb: 2
        }}>

          {/* Card Content - Left Side */}

          <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, p: 0 }}>
            <Button onClick={() => navigate('/list')} startIcon={<UndoSharpIcon />}
              sx={{
                p: 0, justifyContent: 'center', alignItems: 'center', color: 'black',
                bgcolor: 'transparent', width: "1px", fontSize: '13px'
              }}
            ></Button>
            <Grid2 container spacing={2} component='form' onSubmit={handleSubmit(onSubmit)} sx={{ flexDirection: 'column' ,textAlign:'justify'}}>
              <Grid2 item xs={12} sx={{ width: '100%' }}>
              <Typography sx={{textAlign:'justify',pl:1}} >Title</Typography>
                <TextField
                  className="textField1 textFieldInput1"
                  // label="Title"
                  variant="outlined"
                  defaultValue={editList.title}
                  {...register('title', { required: true })}
                  onChange={(e) => setValue('title', e.target.value)}
                  sx={{ width: { xs: '15.5rem', sm: '20.95rem', md: '25.5rem', lg: '30rem', xl: '36.25rem' }, }}

                />
              </Grid2>
              <Grid2 item xs={12}>
              <Typography sx={{textAlign:'justify',pl:1}} >Description</Typography>
                <TextField
                  className="textField1 textFieldInput1"
                  // label="Description"
                  variant="outlined"
                  defaultValue={editList.description}
                  multiline
                  rows={5}
                  {...register('description', { required: true })}
                  onChange={(e) => setValue('description', e.target.value)}
                  sx={{ width: { xs: '15.5rem', sm: '20.95rem', md: '25.5rem', lg: '30rem', xl: '36.25rem' }, }}

                />
              </Grid2>
              <Grid2 item xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<UploadFileIcon />}
                >
                  Upload Image
                  <input
                    hidden
                    type="file"
                    hiden
                    accept="image/*"
                    {...register('image')}
                  />
                </Button>

              </Grid2>
              <Grid2 item xs={12}>
                <Button
                  variant="contained" color="success" type='submit'
                  sx={{ bgcolor: 'rgb(76, 175, 80)', width: { xs: '40%', sm: '40%', md: '40%', lg: '30%', xl: '20%', } }}>
                  {
                    loading ? <CircularProgress size={30} color='inherit' /> : " Submit"
                  }

                </Button>


              </Grid2>
              {/* </form> */}
            </Grid2>
          </CardContent>

          {/* Image Preview - Right Side */}

          <Grid2 item xs={12} md={6}>
            <Typography>Previous Image</Typography>
            {imagePreview ? (
              <CardMedia
                sx={{ width: { xs: '100%', md: 300 }, height: 'auto', objectFit: 'cover', mt: 2 }}
                component="img"
                height="200"
                image={imagePreview}
                alt="Not image found"
              />
            ) : (
              <Box sx={{ height: 200, bgcolor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                No Existing Image Available
              </Box>
            )}
            <Typography sx={{ mt: 2 }}>Current Image</Typography>
            {newImage ? (
              <CardMedia
                sx={{ width: { xs: '100%', md: 300 }, height: 'auto', objectFit: 'cover', mt: 2 ,mb:{md:5,lg:0}}}
                component="img"
                height="200"
                image={newImage}
                alt="New Product Image Preview"
                

              />
            ) : (
              <Box sx={{ height: 200, bgcolor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                New Image Not Available
              </Box>
            )}

          </Grid2>

        </Card>
        <ToastContainer />
      </Box>
    </ThemeProvider>
  )
}
