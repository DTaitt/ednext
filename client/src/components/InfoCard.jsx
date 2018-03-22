//@flow

import React from 'react';
import './../styles/InfoCard.css';

import { Panel } from 'react-bootstrap';

type Props = {
    title: string,
    body: any,
};

export default function InfoCard(props: Props) {

    //format content
    let body = props.body;
    switch (props.title) {
        case 'cost':
            body = "$" + body.toLocaleString();
            break;
        case 'duration':
            body = body + ' weeks';  
            break;       
        default:
            body;
        break;
    }
    
    //change boolean to string
    switch (props.body) {
        case 'true':
            body = 'yes'
            break;
        case 'false':
            body = 'false'
            break;
        default:
            body
            break;
    }
    
    return (
        <Panel id={props.title.split(' ').join('-')}>
            <Panel.Heading>
                <h3>{ props.title }</h3>
            </Panel.Heading>
            <Panel.Body>
                <p>{ body }</p>
            </Panel.Body>
        </Panel>
    )
}