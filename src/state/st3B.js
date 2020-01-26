import React from 'react';

class Person extends React.Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.passed}>Display Age</button>
            </div>
        );
    }
}

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 20
        }
    }

    display = () => {
        console.log(this.state.age)
        this.setState({age: 100})
    }

    render() {
        return (
            <div>
                <Person passed={this.display}></Person>
            </div>
        );
    }

}
