import React from "react";

import main from "./MainPage.module.css";

import Header from "../../components/Header/Header";


export default function MainPage() {
    return (
        <div className={main.container}>
            <Header />

            <div>Body</div>
        </div>
    );
}