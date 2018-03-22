//@flow
import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

import './../styles/Header.css';

type Props = {
    currentBootcamp: string,
    bootcampNames: string[],
    handleDropdown: (name:string) => void,
}

export default function Header (props:Props) {
        return (
            <header>
                <h1>EdNext</h1>
                <DropdownButton
                    id='bootcamp-dropdown'
                    title={props.currentBootcamp}
                >
                    {
                        props.bootcampNames.map((name) => {
                            return(
                                <MenuItem 
                                    key={name}
                                    onClick={() => {props.handleDropdown(name)}}
                                >
                                    {name}
                                </MenuItem>
                            )
                        })
                    }
                </DropdownButton>
            </header>
        )
}