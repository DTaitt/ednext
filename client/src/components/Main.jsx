import React from 'react';
import './../styles/Main.css';

import InfoCard from "./InfoCard";
import InfoCardList from "./InfoCardList";

export default function Main(props) {
    console.log(props.bootcampData[0])
    return(
        <main>
            <h2>{props.bootcampData[0].bootcamp}</h2>
            <div className="container">
                <InfoCard info={{ heading: "cost", body: props.bootcampData[0].bootcamp_cost }} />
                <InfoCard info={{ heading: "duration", body: props.bootcampData[0].duration }} />
                <InfoCard info={{ heading: "financing", body: "yes" }} />
                <InfoCard info={{ heading: "career services", body: "yes" }} />
                <InfoCardList skills={["javascript", "react", "html", "css", 4, 4, 5, 5, 6, 6, 7, 8]} />
            </div>          
        </main>
    )
}