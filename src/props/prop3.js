import React from "react";

class Car extends React.Component {
    render() {
        var cars = "";
        for (var i=0; i<this.props.brand.length; i++){
            if(i>0){
                cars+=" and ";
            }
            cars += this.props.brand[i];
        }
        return <h2>Cars: {cars}!</h2>;
    }
}

export default class Garage extends React.Component {
    render() {
        const carinfo1 = ["Ford", "Opel"];
        const carinfo2 = ["Volkswagen"];
        const carinfo3 = ["Toyota","BMW","Subaru","Renault"];
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand={carinfo1}/>
                <h1>Who lives in my Garage?</h1>
                <Car brand={carinfo2}/>
                <h1>Who lives in my Garage?</h1>
                <Car brand={carinfo3}/>
            </div>
        );

    }
}