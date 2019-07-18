import React from 'react';

function OrganismList(props) {
    let finalShowlist;
    const showList = props.showList.map((array) =>
        <li key={array.id}>
            <input
                key={array.id}
                type="checkbox"
                checked={array.isChecked} //set initial value of checkbox based on props, either true or false
                name={array.fullName}
                onChange={props.handleCheckboxChange}
            />
            {array.fullName}
        </li>
    );
    if (props.isRenderAll) {
        finalShowlist =
            <div>
                <li>
                    <input
                        key="checkboxAll"
                        type="checkbox"
                        onChange={props.handleCheckboxAll}
                    />Select all organisms
                </li>
                {showList}
            </div>;
    }
    else {
        finalShowlist = <div>{showList}</div>;
    }
    return (
        <div>
            <p>*OrganismList</p>
            <ul>
                {finalShowlist}
            </ul>
        </div>
    );
}

export default OrganismList;