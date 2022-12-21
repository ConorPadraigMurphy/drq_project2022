import React from "react";
import { Jobs } from "./Jobs";
import axios from "axios";

export class CurrentJobs extends React.Component {
    componentDidMount() {
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
                <h3></h3>
                <Jobs Jobs={this.state.Jobs}></Jobs>
            </div>
        );
    }
}


