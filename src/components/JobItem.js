import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class JobItemcomp extends React.Component {
    constructor() {
        super();
        this.DeleteJob = this.DeleteJob.bind(this);
    }
    DeleteJob(e) {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/Jobs/' + this.props.Jobs._id)
            .then((res) => { this.props.Refresh(); })
            .catch();
    }

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
                    <Button variant="danger" onClick={this.DeleteJob}>Delete Details</Button>
                </Card>
            </div>
        );
    }
}
