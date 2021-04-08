import React, {useContext} from 'react';
import content from '../../data/content.json';
import {LanguageContext} from "../../context/LanguageContextProvider";

function Home() {
    const { language } = useContext(LanguageContext);
    console.log(language);
  return (
    <div className="page-container">
      <h2>{content[language].home.title}</h2>
      <p>{content[language].introText}</p>
    </div>
  );
}

export default Home;
