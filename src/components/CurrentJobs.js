import React from "react";
import { Jobs } from "./Jobs";
import axios from "axios";

export class CurrentJobs extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount() {
        //Gets jobs from json on localhost:4000
        axios.get('http://localhost:4000/api/Jobs')
            .then(response => {
                console.log(response.data)
                this.setState({ Jobs: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    state = { Jobs: [] };

    render() {
        return (
            <div>
                <h3>Current Jobs</h3>
                {/* Lists the jobs */}
                <Jobs Jobs={this.state.Jobs} Refresh={this.componentDidMount}></Jobs>
            </div>
        );
    }
}


