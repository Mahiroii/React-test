import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


export default function App() {
	return (
		<Routes>
			<Route path="/" element={ <MainPage /> } />
			<Route path="*" element={ <ErrorPage /> } />
		</Routes>
	);
}