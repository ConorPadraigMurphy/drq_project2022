import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from "react-router-dom";

export class JobItemcomp extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>{this.props.Jobs.vechModel}</CardHeader>
                    <Card.Body>
                        <p>{this.props.Jobs.problem}</p>
                        <p>{this.props.Jobs.owner}</p>
                        <p>{this.props.Jobs.contactNum}</p>
                        <p>{this.props.Jobs.reg}</p>
                    </Card.Body>
                    <Link to={'/UpdateJob/' + this.props.Jobs._id} className="btn btn-primary">Update Details</Link>
                </Card>
            </div>
        );
    }
}
