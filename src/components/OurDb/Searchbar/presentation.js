import React from 'react';

function Searchbar(props) {
    return (
        <div>
            <p>*SearchBar</p>
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={props.handleSearchbarChange}
                />
            </form>
        </div>
    );
}

export default Searchbar;