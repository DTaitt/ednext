import React from 'react';
import './../styles/Main.css';

import BootcampPanel from './BootcampPanel';

export default function Main({bootcampData}) {
    return(
        <main>
            {
                bootcampData.map((bootcamp) => {
                    // console.log(bootcamp)
                    return (<BootcampPanel 
                        key = {bootcamp.id}
                        name = {bootcamp.bootcamp}
                        cost = {bootcamp.bootcamp_cost}
                        duration = {bootcamp.duration}
                        hasCareerServices = {bootcamp.has_career_services.toString()}
                        hasFinancingPlan = {bootcamp.has_financing_plan.toString()}
                    />)
                })
            }         
        </main>
    )
}