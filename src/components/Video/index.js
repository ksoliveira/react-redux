import React, { Component } from 'react';
import './Video.css';

export default class Video extends Component {
    state = {
        
    }

    render() {
        return (
        <aside className="Video">
            <strong>Modulo</strong>
            <p>Aula tal</p>

            <div className='player'></div>
            
        </aside>
        );
    }
}