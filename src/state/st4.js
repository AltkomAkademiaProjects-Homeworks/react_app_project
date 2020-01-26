import React from "react";

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 20
        }
    }

    display = () => {
        console.log(this.state.age)
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.display}>Display age</button>
            </div>
        )

    }
}