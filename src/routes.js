import React, {lazy} from 'react';
const Home = lazy(() => import('Pages/Home'));
const Ivan = lazy(() => import('Pages/Ivan'));
const Error = lazy(() => import('Pages/Error'));
const Irina = lazy(() => import('Pages/Irina'));
const Course = lazy(() => import('Pages/Course'));
const Success = lazy(() => import('Pages/Success'));
const Webinar = lazy(() => import('Pages/Webinar'));
const NotFound = lazy(() => import('Pages/NotFound'));
const PublicOffer = lazy(() => import('Pages/PublicOffer'));
const Test = lazy(() => import('Pages/Test'));

const routes = [
    { path: '/', element: <Home /> , exact: true },
    { path: '/ivan', element: <Ivan />},
    { path: '/irina', element: <Irina /> },
    { path: '/course', element: <Course /> },
    { path: '/webinar', element: <Webinar /> },
    { path: '/public-offer', element: <PublicOffer /> },
    { path: '/success', element: <Success /> },
    { path: '/error', element: <Error /> },
    { path: '/test', element: <Test /> },
    { path: '*', element: <NotFound /> },
];

export default routes;
