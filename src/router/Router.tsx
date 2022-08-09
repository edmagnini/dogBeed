import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "../screens/main/Main";
import Register from "../screens/register/Register"


const Router = () => {
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;