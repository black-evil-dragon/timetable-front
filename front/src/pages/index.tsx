import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from '@app/layout';

import NoPage from '@pages/404';
import HomePage from '@pages/home';


function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<HomePage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default Routing;
