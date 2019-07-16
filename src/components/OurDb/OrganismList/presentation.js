import React from 'react';

function OrganismList(props) {
    const items = props.showList.map((array) =>
        <li key={array.id}>
            <input
                key={array.id}
                type="checkbox"
                checked={array.isChecked}  //set initial value of checkbox based on props, either true or false
                name={array.fullName}
                onChange={props.handleCheckboxChange}
            />
            {array.fullName}
        </li>
    );
    return (
        <div>
            <p>*OrganismList</p>
            <input
                key="CheckboxAll"
                type="checkbox"
                onChange={props.handleCheckboxAll}
            />
            <ol>
                {items}
            </ol>
        </div >
    );
}

export default OrganismList;