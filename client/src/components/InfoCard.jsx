import React from 'react';
import './../styles/InfoCard.css';

import { Panel } from 'react-bootstrap';

type Props = {};

export default function InfoCard({title, body}) {

    //format content
    switch (title) {
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
    switch (body) {
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
        <Panel id={title.split(' ').join('-')}>
            <Panel.Heading>
                <h3>{ title }</h3>
            </Panel.Heading>
            <Panel.Body>
                <p>{ body }</p>
            </Panel.Body>
        </Panel>
    )
}