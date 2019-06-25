import React from 'react';

function Searchbar(props) {
    return (
        <div>
            <p>Search in {props.data.count} organisms</p>
            <form>
                <input type="text" placeholder="Search..." />
            </form>
        </div>
    );
}

export default Searchbar;