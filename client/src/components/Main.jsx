import React from 'react';
import './../styles/Main.css';

import InfoCard from "./InfoCard";
import InfoCardList from "./InfoCardList";

export default function Main() {
    return(
        <main>
            <h2>General Assembly?</h2>
            <div className="container">
                <InfoCard info={{ heading: "cost", body: 10000 }} />
                <InfoCard info={{ heading: "duration", body: 12 }} />
                <InfoCard info={{ heading: "financing", body: "yes" }} />
                <InfoCard info={{ heading: "career services", body: "yes" }} />
                <InfoCardList skills={["javascript", "react", "html", "css", 4, 4, 5, 5, 6, 6, 7, 8]} />
            </div>          
        </main>
    )
}