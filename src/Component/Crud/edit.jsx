import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography, Snackbar, IconButton } from "@mui/material";
import { editProductData, editProductList } from '../../Function/crudSlice';
import CloseIcon from '@mui/icons-material/Close';

export default function Update() {

    const dispatch = useDispatch();

    const { editList } = useSelector(state => state.crudKey);
    const { id } = useParams();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [fileError, setFileError] = useState("");
    
    useEffect(() => {
        dispatch(editProductList(id));
    }, [id])

    useEffect(() => {
        if (editList != null) {

            setValue("title", editList?.title);
            setValue("description", editList?.description);
            setValue("image", editList?.image);

        }
    }, [editList, setValue]);


    const validateFileType = (file) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        return allowedTypes.includes(file.type);
    };

    const onSubmit = (data) => {
        const file = data.image[0];
        if (!validateFileType(file)) {
            setFileError("Only JPG, JPEG, and PNG files are allowed.");
            return;
        }

        setFileError("");

        const updatedData = { ...data, id };
        dispatch(editProductData(updatedData, id));
        setOpenSnackbar(true);


    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

   

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom> UPDATE DETAILS </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="title"
                    variant="outlined"
                    margin="normal"
                    {...register("title", { required: "Enter your title",})}
                    error={!!errors.title}
                    helperText={errors.title ? errors.title.message : ""}
                />
                <TextField
                    fullWidth
                    label="description"
                    variant="outlined"
                    margin="normal"
                    {...register("description", { required: "Enter your description" })}
                    error={!!errors.description}
                    helperText={errors.description ? errors.description.message : ""}
                   
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    type="file"
                    {...register("image",)}
                    error={!!errors.image}
                    helperText={errors.image ? errors.image.message : ""}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Update successful"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                action={
                    <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </Container>
    );
}

