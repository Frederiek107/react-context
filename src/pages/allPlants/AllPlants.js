import React, {useContext} from 'react';
import content from '../../data/content.json';
import {LanguageContext} from "../../context/LanguageContextProvider";

function AllPlants() {
    const {language} = useContext(LanguageContext);
  return (
    <div className="page-container">
      <h2>{content[language].plants.title}</h2>
      <p>{content[language].plants.text}</p>
      <ul>
        {content[language].plants.plants.map((plant) => <li>{plant}</li>)}
      </ul>
    </div>
  );
}

export default AllPlants;
