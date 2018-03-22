//@flow
import React from 'react';
import './../styles/Main.css';

import BootcampPanel from './BootcampPanel';

type Props = {
    bootcampData: Object[],
    currentBootcamp: string,
}

export default function Main(props:Props) {
    return(
        <main>
            {
                props.bootcampData.map((bootcamp) => {
                    // console.log(bootcamp)
                    // console.log(currentBootcamp)
                    // console.log(bootcamp.bootcamp)
                    return (<BootcampPanel 
                        key = {bootcamp.id}
                        currentBootcamp={props.currentBootcamp}
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