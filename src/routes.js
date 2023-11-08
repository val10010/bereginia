import React, { lazy } from 'react';

const Home = lazy(() => import('Pages/Home'));
const Ivan = lazy(() => import('Pages/Ivan'));
const Irina = lazy(() => import('Pages/Irina'));
const NotFound = lazy(() => import('Pages/NotFound'));
const Course = lazy(() => import('Pages/Course'));

const routes = [
    { path: '/', element: <Home />, exact: true },
    { path: '/ivan', element: <Ivan /> },
    { path: '/irina', element: <Irina /> },
    { path: '/course', element: <Course /> },
    { path: '*', element: <NotFound /> },
];

export default routes;
