import React from 'react';
import './../styles/InfoCard.css';

import { Panel } from 'react-bootstrap';

type Props = {};

export default function InfoCard(props:Props) {

    switch (props.info.heading) {
        case 'cost':
            props.info.body = "$" + props.info.body.toLocaleString();
            break;
        case 'duration':
            props.info.body = props.info.body + ' weeks';  
            break;  
        default:
            props.info.body;
        break;
    }
    
    return (
        <Panel id={props.info.heading}>
            <Panel.Heading>
                <h3>{ props.info.heading }</h3>
            </Panel.Heading>
            <Panel.Body>
                <p>{ props.info.body }</p>
            </Panel.Body>
        </Panel>
    )
}