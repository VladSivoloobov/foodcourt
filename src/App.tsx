import React from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    );
};
