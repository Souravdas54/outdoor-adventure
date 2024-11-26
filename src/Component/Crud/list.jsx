import * as React from 'react';
import {
    Box, Button, Card, CardContent, CardMedia, CircularProgress, Dialog, DialogActions, DialogContent,
    DialogContentText, DialogTitle, Grid2, Pagination, Slide, Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productList, deleteProduct } from '../../Redux/crudSlice';
import { productImagePath } from '../../Api/axiosinstance';
import { Link } from 'react-router-dom';
import './crud.css'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function List() {
    console.log(productList)
    const dispatch = useDispatch();

    const { list = [], totalpage } = useSelector((state) => state.crudKey);

    // DELETE PRODUCT //
    const [deleteId, setDeleteId] = useState('')
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

    // TOTAL PAGES //
    const [currentPage, setCurrentPage] = useState(1);

    // DIALOG FOR IMAGE POPUP //
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // LOADING PAGE //
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        dispatch(productList({ page: currentPage, perpage: 10 }))
            .then(() => {
                setLoading(false)
            })
    }, [dispatch, currentPage]);

    const handlePageChange = (event, pageno) => {
        setCurrentPage(pageno);
    }

    // Delete Function //
    const handleConfirmDelete = () => {
        if (deleteId !== '') {
            dispatch(deleteProduct({
                id: deleteId,
            })
            ).then(() => {
                dispatch(productList({ page: currentPage, perpage: 10 }))

            }).catch((error) => console.error('Failed to delete product:', error));

        }
        setDeleteId("");
        setDeleteDialogOpen(false)
    }

    // Open delete confirmation dialog
    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setDeleteDialogOpen(true);
    };

    // Close dialog without deleting
    const handleCloseDialog = () => {
        setDeleteDialogOpen(false);
    };

    // Handle image click to open popup dialog
    const handleImageClick = (item) => {
        setSelectedItem(item);
        setOpenDialog(true);
    };

    // Close popup dialog
    const handleCloseImageDialog = () => {
        setOpenDialog(false);
        setSelectedItem(null);
    };
    return (
        <Box
            sx={{
                p: 2,
                borderRadius: 0,
                boxShadow: 0,
                backgroundColor: '#f5f5f5',
                height: 'auto',
                width: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }} >
            {
                isLoading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                        <CircularProgress color='black' size={50} />
                    </Box>
                ) : (
                    <>
                        <Grid2 container spacing={1} sx={{
                            justifyContent: { xs: 'center', sm: 'center', lg: 'center' }, alignContent: 'center',
                            width: { xs: '100%', sm: '100%', lg: '100%' }
                        }}>
                            {/* Full-Screen Delete Confirmation Dialog */}
                            <Dialog
                                // fullScreen
                                open={isDeleteDialogOpen}
                                onClose={handleCloseDialog}
                                TransitionComponent={Transition}
                                BackdropProps={{
                                    sx: {
                                        boxShadow: "none",
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    }
                                }}
                                PaperProps={{
                                    sx: {
                                        boxShadow: 'none',
                                    }
                                }}
                            >
                                <DialogTitle>Delete Product</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Do you want to delete this product?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseDialog} color="error">
                                        Disagree
                                    </Button>
                                    <Button onClick={handleConfirmDelete} color="success" autoFocus>
                                        Agree
                                    </Button>
                                </DialogActions>
                            </Dialog>

                            {list.length > 0 ? (
                                list.map((item, index) => (

                                    <Grid2 item xs={12} sm={2} md={4} lg={6} key={index}>

                                        <Card sx={{
                                            height: '100%', display: 'flex', flexDirection: 'column',
                                            width: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '100%' },

                                        }}>

                                            <CardMedia
                                                component="img"
                                                className="card-media-hover"
                                                sx={{
                                                    height: { xs: '11.25rem', sm: '9.375rem', md: '9.375rem', lg: '12.5rem', xl: '12.5rem' },
                                                    width: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '4px 4px 0 0',
                                                    display: 'block',
                                                    margin: '0 auto'
                                                }}
                                                image={item?.image ? productImagePath(item?.image) : 'placeholder.jpg'}
                                                alt={item?.title}
                                                onClick={() => handleImageClick(item)}
                                            />
                                            <CardContent sx={{ textAlign: 'center' }}>
                                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, width: '18.75rem' }}>{item?.title}</Typography>
                                                <Typography variant="body2"
                                                    sx={{
                                                        width: '18.75rem',
                                                        maxHeight: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem', xl: '6rem' },
                                                        overflow: 'hidden', textAlign: 'justify',
                                                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                                                    }}>{item?.description}</Typography>
                                            </CardContent>

                                            {item && item._id && (
                                                <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', }}>
                                                    <Button variant="outlined" color="primary" component={Link}
                                                        to={`/product/detail/${item._id}`} startIcon={<EditIcon />}
                                                    // onClick={() => navigate(`/updateproduct/${item._id}`)}
                                                    >Edit</Button>

                                                    <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => {
                                                        handleDeleteClick(item._id);
                                                        // setDelete(true);
                                                    }}>Delete</Button>
                                                </Box>
                                            )}
                                        </Card>
                                    </Grid2>

                                ))
                            ) : (
                                <Box sx={{ height: '70vh', pt: 25, textAlign: 'center', justifyContent: 'center', alignItems: 'center', }}>

                                    <WarningAmberIcon sx={{ fontSize: '6rem', color: 'red' }} />
                                    <Typography variant='h5' >Products not available.</Typography>
                                    <Typography >No internet connection</Typography>
                                </Box>
                            )
                            }
                        </Grid2>
                        {/* Image Popup Dialog */}
                        <Dialog
                            open={openDialog}
                            onClose={handleCloseImageDialog}
                            TransitionComponent={Transition}
                            maxWidth="md"
                        >
                            <DialogActions>
                                <Button startIcon={<CloseIcon />} color='black' onClick={handleCloseImageDialog}>

                                </Button>
                            </DialogActions>
                            {selectedItem && (
                                <>
                                    <DialogTitle sx={{ p: 1, ml: 2 }}>{selectedItem.title}</DialogTitle>
                                    <DialogContent >
                                        <Box

                                            sx={{
                                                width: '100%',
                                                maxWidth: {
                                                    xs: '20rem',
                                                    sm: '25rem',
                                                    md: '30rem',
                                                    lg: '43.75rem',
                                                    xl: '50rem',
                                                },
                                                height: {
                                                    xs: '11.25rem',
                                                    sm: '15rem',
                                                    md: '18.75rem',
                                                    lg: '22.5rem',
                                                    xl: '25rem',
                                                },
                                                overflow: 'hidden',

                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={productImagePath(selectedItem.image)}
                                                alt={selectedItem.title}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '0.25rem',
                                                }}
                                            />
                                        </Box>

                                        <Typography variant="body2" sx={{ mt: 2, fontFamily: 'poppins' }}>
                                            <span style={{ fontWeight: 'bold', fontSize: '1rem' }}> Description : </span>
                                            {selectedItem.description}
                                        </Typography>
                                    </DialogContent>

                                </>
                            )}
                        </Dialog>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Pagination count={totalpage} page={currentPage} onChange={handlePageChange} />
                        </Box>
                    </>
                )
            }

        </Box>
    )
}
