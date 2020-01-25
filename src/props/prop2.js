import React from "react";

class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand}!</h2>;
    }
}

export default class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand={this.props.brandGarage}/>
            </div>
        )
            ;
    }
}