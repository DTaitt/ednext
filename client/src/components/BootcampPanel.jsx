//@flow
import React from 'react';
import './../styles/BootcampPanel.css';

import InfoCard from "./InfoCard";
import InfoCardList from "./InfoCardList";

type Props = {
    name: string,
    cost: number,
    duration: number,
    hasFinancingPlan: boolean,
    hasCareerServices: boolean, 
    currentBootcamp: string,
}

export default function BootcampPanel(props: Props) {
    return(
        <div 
            className={
           
                    props.currentBootcamp === props.name
                    ? 'bootcamp-panel current'
                    : 'bootcamp-panel'
             
            }
        >
            <h2>{props.name}</h2>
            <div className="container">
                <InfoCard title='cost' body={props.cost} />
                <InfoCard title='duration' body={props.duration} />
                <InfoCard title='financing' body={props.hasFinancingPlan} />
                <InfoCard title='career services' body={props.hasCareerServices} />
                {/* <InfoCardList title='skills' skills={["javascript", "react", "html", "css", 4, 4, 5, 5, 6, 6, 7, 8]} /> */}
            </div>
        </div>
    )
}