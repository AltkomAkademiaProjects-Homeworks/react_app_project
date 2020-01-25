import React from "react";
function Sentences(props) {
    return (
        <div>
            <h2>Zdania:</h2>
            {props.children}
        </div>
    )
}

export default function App() {
    return (
        <Sentences>
            <div> To jest moje 1 zdanie </div>
            <div> To jest moje 2 zdanie </div>
            <div> To jest moje 3 zdanie </div>
            <div> To jest moje 4 zdanie </div>
            <div> To jest moje 5 zdanie </div>
            <div> To jest moje 6 zdanie </div>
        </Sentences>

    )

}