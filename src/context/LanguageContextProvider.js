import React, {createContext, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import AllPlants from "../pages/allPlants/AllPlants";

export const LanguageContext = createContext(null);

function LanguageContextProvider({children}) {
    const [language, toggleLanguage] = useState('nl');

    const data = {
        language: language,
        setLanguageNL: setLanguageNL,
        setLanguageES: setLanguageES,
    }

    function setLanguageNL() {
        toggleLanguage('nl');
    }

    function setLanguageES() {
        toggleLanguage('es');
    }

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;