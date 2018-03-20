import React from 'react';
import './../styles/Main.css';

import BootcampPanel from './BootcampPanel';

export default function Main({bootcampData, currentBootcamp}) {
    return(
        <main>
            {
                bootcampData.map((bootcamp) => {
                    // console.log(bootcamp)
                    // console.log(currentBootcamp)
                    // console.log(bootcamp.bootcamp)
                    return (<BootcampPanel 
                        key = {bootcamp.id}
                        currentBootcamp={currentBootcamp}
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