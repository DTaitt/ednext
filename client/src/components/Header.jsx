//@flow
import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

import './../styles/Header.css';

export default class Header extends Component {
    // state = {
    //     currentBootcamp:'flatiron school',
    // }

    // handleDropdown = this.handleDropdown.bind(this)

    // handleDropdown(name) {
    //     this.setState({
    //         currentBootcamp: name,
    //     })
    // }

    render() {
        // console.log(this.state)
        return (
            <header>
                <h1>EdNext</h1>
                <DropdownButton
                    id='bootcamp-dropdown'
                    title={this.props.currentBootcamp}
                >
                    {
                        this.props.bootcampNames.map((name) => {
                            return(
                                <MenuItem 
                                    key={name}
                                    onClick={() => {this.props.handleDropdown(name)}}
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
}