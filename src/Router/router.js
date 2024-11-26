import React, { Suspense, useEffect, } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import { useDispatch, } from "react-redux";
import { lazy } from "react";
import Header from '../Sharemodules/Header/header';
import Footer from '../Sharemodules/Footer/footer';
import { Box, Typography } from "@mui/material";
import { token_check } from '../Redux/authSlice';

const Home = lazy(() => import('../Component/Home/home'));
const About = lazy(() => import('../Component/About/about'));
const Contact = lazy(() => import('../Component/Contact/contact'));
const Register = lazy(() => import('../Component/Auth/register'));
const Login = lazy(() => import('../Component/Auth/login'));

const ServicePage = lazy(() => import('../Component/Servicepage/service'));
const Profile = lazy(() => import('../Component/Auth/profile'));
const CreateProduct = lazy(() => import('../Component/Crud/create'));
const List = lazy(() => import('../Component/Crud/list'));
const UpdateProduct = lazy(() => import('../Component/Crud/updateproduct'));



export default function RouterApp() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(token_check())
    }, [dispatch])

    function PrivateRoute({ element }) {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        return token !== null && token !== undefined ? (
            element
        ) : (
            <Navigate to="/login" />
        )

    }


    const PublicRoutes = [
        { path: "/", Component: <Home /> },
        { path: "/register", Component: <Register /> },
        { path: "/login", Component: <Login /> },
        { path: "/contact", Component: <Contact /> }
    ];

    const PrivateRoutesName = [
        { path: "/about", Component: <About /> },
        { path: "/create", Component: <CreateProduct /> },
        { path: "/service", Component: <ServicePage /> },
        { path: "/list", Component: <List /> },
        { path: "/product/detail/:id", Component: <UpdateProduct /> },
        { path: "/profile", Component: <Profile /> }
    ];


    return (
        <div className="App">
            <Router>
                <Header />

                <Suspense fallback={
                    <Box width="100%" height="70vh" display="flex" justifyContent="center" alignItems="center">
                        <Typography sx={{ mt: 3 }} textAlign="center" variant="h5">Loading....</Typography>
                    </Box>

                }>
                    <Routes>
                        {PublicRoutes.map((item, index) => (
                            <Route key={index} path={item.path} element={item.Component} />
                        ))}

                        {PrivateRoutesName.map((item, index) => (
                            <Route
                                key={index}
                                path={item.path}
                                element={<PrivateRoute element={item.Component} />}

                            />

                        ))}
                    </Routes>

                </Suspense>

                <Footer />
            </Router>
        </div>

    );
};
