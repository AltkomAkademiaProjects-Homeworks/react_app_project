import React from 'react';

export default class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '' };
    }

    myChangeHandler = (event) => {
        console.log(event)
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <form>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input type='text' onChange={this.myChangeHandler}/>
            </form>
        );
    }
}
