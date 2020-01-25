import React from 'react';

class Car extends React.Component {
    render() {
        var cars = "";

        for (var i = 0; i < this.props.brand.length; i++)
        {

            if(i > 0) {
                cars += " and "
            }

            cars += this.props.brand[i];
        }


        return <h2>Cars: {cars}!</h2>;
    }
}

export default class Garage extends React.Component {
    render() {
        var carinfo1 = [];

        while (true) {
            let txt = prompt("Wprowadz wartosc");
            if (txt === "p") {
                break;
            } else {
                carinfo1.push(txt);
            }
        }

        return (
            <div>
                <h1>Who lives in my garage?</h1>
                <Car brand={carinfo1} />
            </div>
        );
    }
}