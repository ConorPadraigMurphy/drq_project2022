import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export class JobItemcomp extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>{this.props.Jobs.owner}</CardHeader>
                    <Card.Body>
                        <p>{this.props.Jobs.contactNum}</p>
                        <p>{this.props.Jobs.reg}</p>
                        <p>{this.props.Jobs.vechModel}</p>
                    </Card.Body>
                </Card>


            </div>
        );
    }
}
