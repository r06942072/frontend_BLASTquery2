import React from 'react';

function FastaTextbox(props) {
    return (
        <div>
            <p>windowWidth = {props.data.windowWidth}, windowHeight = {props.data.windowHeight}</p>
            <textarea cols={props.data.fastaWidth} rows={props.data.fastaHeight} />
        </div>
    );
}

export default FastaTextbox;