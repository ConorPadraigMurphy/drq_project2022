import React from "react";

export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>The Mechanics Journal</h1>
                <h2>{new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}</h2>
                <img src="https://thumbs.dreamstime.com/b/old-garage-sign-mechanic-duty-car-vehicles-service-repair-advertisement-vector-garage-vintage-poster-decoration-223502758.jpg"></img>
            </div>
        );
    }
}