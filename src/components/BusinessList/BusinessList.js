import React from 'react';
import './BusinessList.css';
import {Business} from '../Business/Business.js';

export class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
}