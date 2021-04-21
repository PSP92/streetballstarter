import React from "react";
import "./styles.css";
// COMPONENTS
import Title from "../Title";
// IMPORT DATA
import parrkData from './parrkData';
import Parks from './ParkInfo/Parks';
import ParkImage from './ParkInfo/ParkImage';



export default function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <section className="items-container">
          <section id="items">
            <Parks parrlData={parrkData}/>
            </section>
          <section id="image">
            <ParkImage data ={parrkData[0]}/>
            </section>
        </section>
      </main>
    </div>
  );
}