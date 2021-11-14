import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormLoginA from "./FormLoginA";
import FormSignup from "./FormSignup";

export default function MyRouting  () {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element = {< FormLoginA/>} />
                    <Route exact path="/signup" element = {< FormSignup/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}