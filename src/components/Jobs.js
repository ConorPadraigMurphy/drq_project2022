import React from "react";
import { JobItemcomp } from "./JobItem";

export class Jobs extends React.Component {
    render() {
        return this.props.Jobs.map(
            (Job) => {
                return <JobItemcomp Jobs={Job} key={Job._id} Refresh={this.props.Refresh}></JobItemcomp>
            }
        );
    }

}
