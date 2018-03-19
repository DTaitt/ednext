import React from 'react';
import './../styles/InfoCardList.css';
import { Panel } from "react-bootstrap";

export default function InfoCardList(props) {
    // console.log(props)
    return(
        <Panel id='skills'>
            <Panel.Heading>
                <h3>skills</h3>
            </Panel.Heading>
            <Panel.Body>
                <ul>
                    {
                        props.skills.map((skill) => {
                            // console.log(skill)
                            return <li>{skill}</li>
                        })
                    }
                </ul>
            </Panel.Body>
        </Panel>
        
    )
}