import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: '',
            errorname: ''
        };
    }
    myChangeHandler = (event) => {
        //let letters = /^[A-Za-z]+$/;
        let key = event.target.name;
        let val = event.target.value;
        let err = '';
        let errnm = '';
        if (key === "age") {
            if (val !="" && !Number(val)) {
                err = <strong>Your age must be a number!</strong>;
            }
            this.setState({errormessage: err});
        }
        if (key === "username") {
            if (val.length <3) {
                errnm = <strong>Your name must be longer!</strong>
            }
            //else if (val.match(letters)) {
            //   errnm = <strong>Bad!</strong>
            //}

            this.setState({errorname: errnm});
        }


        this.setState({[key]: val});
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                {this.state.errorname}
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                {this.state.errormessage}
            </form>
        );
    }
}