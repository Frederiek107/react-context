import React, {useContext} from 'react';
import writers from '../../assets/bob_betsy.jpg';
import content from '../../data/content.json';
import {LanguageContext} from "../../context/LanguageContextProvider";

function AboutUs() {
    const {language} = useContext(LanguageContext);
  return (
    <div className="page-container">
      <h2>{content[language].aboutUs.title}</h2>
      <img src={writers} alt="Bob & Betsy"/>
      <p>{content[language].aboutUs.writers}</p>
    </div>
  );
}

export default AboutUs;
