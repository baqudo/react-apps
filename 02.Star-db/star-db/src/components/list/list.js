import React, { Component } from 'react';
import { API } from '../../services';
import { DataWrapper } from '../hoc-helpers'
import './list.scss'

const List = (props) => {
    const { items, onItemClick } = props;
    const renderItem = props.children || props.renderItem;

    return (
        <ul className="list-group list-group-flush rounded">
            { items && items.map((item) => {
                const el = renderItem(item);
            
                return (
                    <li className="person-item list-group-item d-flex justify-content-between"
                        key={item.id}
                        onClick={() => onItemClick(item.id)}
                    >
                        { el }
                    </li>
                )
            }) }
        </ul>
    )
}

const { getAllPeople } = new API();

export default DataWrapper(List, getAllPeople);