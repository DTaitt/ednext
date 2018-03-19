import React from 'react';
import './../styles/BootcampPanel.css';

import InfoCard from "./InfoCard";
import InfoCardList from "./InfoCardList";

export default function BootcampPanel({name, cost, duration, hasFinancingPlan, hasCareerServices}) {
    return(
        <div className='bootcamp-panel'>
            <h2>{name}</h2>
            <div className="container">
                <InfoCard title='cost' body={cost} />
                <InfoCard title='duration' body={duration} />
                <InfoCard title='financing' body={hasFinancingPlan} />
                <InfoCard title='career services' body={hasCareerServices} />
                {/* <InfoCardList title='skills' skills={["javascript", "react", "html", "css", 4, 4, 5, 5, 6, 6, 7, 8]} /> */}
            </div>
        </div>
    )
}