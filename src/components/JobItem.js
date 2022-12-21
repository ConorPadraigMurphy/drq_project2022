import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

export class JobItemcomp extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.Jobs.owner}</h4>
                <p>{this.props.Jobs.contactNum}</p>
                <p>{this.props.Jobs.reg}</p>
                <p>{this.props.Jobs.vechModel}</p>
                
            </div>
        );
    }
}
