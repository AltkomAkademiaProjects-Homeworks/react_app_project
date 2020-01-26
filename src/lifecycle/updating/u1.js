// getDerivedStateFromProps()

// shouldComponentUpdate()

// render()

// getSnapshotBeforeUpdate()

// componentDidUpdate()

import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red", no: 1};
    }

    shouldComponentUpdate() {
        return this.state.no <= 5;
    }

    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }

    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}
