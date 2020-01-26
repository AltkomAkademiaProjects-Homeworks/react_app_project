// constructor()


// getDerivedStateFromProps()


// render()



// componentDidMount()









import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor")
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps")
    }
    render() {
        console.log("render")
        return (
            <h1>Test</h1>
        );
    }
}