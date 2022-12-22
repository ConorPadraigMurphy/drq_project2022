import React from "react";
import axios from "axios";

export class AddJob extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addVechModel = this.addVechModel.bind(this);
        this.addProblem = this.addProblem.bind(this);
        this.addOwner = this.addOwner.bind(this);
        this.addContactNum = this.addContactNum.bind(this);
        this.addReg = this.addReg.bind(this);

        this.state = {
            vechModel: '',
            problem: '',
            owner: '',
            contactNum: '',
            reg: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.vechModel},
        ${this.state.problem},
        ${this.state.owner},
        ${this.state.contactNum},
        ${this.state.reg}`);

        const Job = {
            vechModel: this.state.vechModel,
            problem: this.state.problem,
            owner: this.state.owner,
            contactNum: this.state.contactNum,
            reg: this.state.reg
        }

        axios.post('http://localhost:4000/api/Jobs', Job)
            .then()
            .catch();

        this.setState({
            vechModel: '',
            problem: '',
            owner: '',
            contactNum: '',
            reg: ''
        })
    }

    addVechModel(e) {
        this.setState({
            vechModel: e.target.value
        })
    }
    addProblem(e) {
        this.setState({
            problem: e.target.value
        })
    }
    addOwner(e) {
        this.setState({
            owner: e.target.value
        })
    }
    addContactNum(e) {
        this.setState({
            contactNum: e.target.value
        })
    }
    addReg(e) {
        this.setState({
            reg: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Car Model: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.vechModel}
                            onChange={this.addVechModel}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Problem: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.problem}
                            onChange={this.addProblem}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Owner: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.owner}
                            onChange={this.addOwner}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Phone Number: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.contactNum}
                            onChange={this.addContactNum}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Registration Number: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.reg}
                            onChange={this.addReg}
                        />
                    </div>

                    <input type="submit" value="Add Job" />
                </form>
            </div>
        );
    }
}