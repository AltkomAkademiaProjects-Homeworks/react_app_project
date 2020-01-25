import React from "react";

class Car extends React.Component {
    render() {
        var car;
        if (this.props.brand === "Ford") {
            car = "phenomenal"
        }

        return (
            <h2>I am a {car} {this.props.brand}!</h2>);
    }
}

export default class Garage extends React.Component {
    render() {

        let model = prompt("Wprowadź markę", "");
        if (model != null)
            return (
                <div>
                    <h1>Who lives in my Garage?</h1>
                    <Car brand={model}/>
                </div>
            )

    };
}