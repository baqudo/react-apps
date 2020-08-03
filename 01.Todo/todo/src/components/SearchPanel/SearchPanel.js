import React from 'react';
import TodoFilter from '../TodoFilter';

const SearchPanel = () => {

    return (
        <div className="search-panel py-3">
            <div className="row justify-content-between">
                <div className="col">
                    <input className="form-control" placeholder="search"/>
                </div>
                <div className="col">
                    <TodoFilter />
                </div>
            </div>
        </div>
    )
}

export default SearchPanel;