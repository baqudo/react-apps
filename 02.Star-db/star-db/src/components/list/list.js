import React, { Component } from 'react';
import Spinner from '../spinner';
import './list.scss'

export default class List extends Component {
    state = {
        loading: true,
        items: []
    }

    componentDidMount() {
        this.init();
    }
    

    async init() {
        const items = await this.props.getData();

        this.setState({
            loading: false,
            items
        })
    }


    render() {
        const { items, loading } = this.state;
        const renderItem = this.props.children || this.props.renderItem;
        console.log({ renderItem});
        if (loading) return (<Spinner />);

        return (

            <ul className="list-group list-group-flush rounded">
                { items && items.map((item) => {
                    const el = renderItem(item);
                
                    return (
                        <li className="person-item list-group-item d-flex justify-content-between"
                            key={item.id}
                            onClick={() => this.props.onItemClick(item.id)}
                        >
                            { el }
                        </li>
                    )
                }) }
            </ul>
        )
    }
}

// const ListView = ({ people }) => {
//     return (
//         <React.Fragment>
//             { people.map((person) => {
//                 return (
//                     <li className="list-group-item d-flex justify-content-between"
//                         key={person.id}
//                         onClick={this.props.onItemClick(person.id)}
//                     >
//                         <span className="label">{ person.name }</span>
//                     </li>
//                 )
//             }) }
//         </React.Fragment>
//     )
// }