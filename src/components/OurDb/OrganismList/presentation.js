import React from 'react';
import App from '../../App';

function OrganismList(props) {
    return (
        <div>
            <p>*OrganismList</p>
            <li>{props.data.list[0]}</li>
            <li>{props.data.list[1]}</li>
        </div>
    );
}

export default OrganismList;