import React from "react";

export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Mechanics Journal</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <h2>{new Date().toLocaleDateString()}</h2>
            </div>
        );
    }
}