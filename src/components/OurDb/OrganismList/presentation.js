import React from 'react';

function OrganismList(props) {
    const items = props.showList.map((array) =>
        <li key={array.id}>{array.fullName}</li>
    );
    return (
        <div>
            <p>*OrganismList</p>
            <ul>
                {items}
            </ul>
        </div>
    );
}

export default OrganismList;