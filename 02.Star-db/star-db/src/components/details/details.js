import React, { Component } from 'react';
import { API, toDefaultText } from '../../services';
import Spinner from '../spinner';
import ErrorBtn from '../error-btn';

import './details.scss';

const APIService = new API();

export default class Details extends Component {

    componentDidMount() {
        this.updateDetails()
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.id !== prevProps.id) {
            this.updateDetails()
        }
    }
    

    state = {
        loading: true,
        details: {}
    }

    parseData(type) {
        switch (type) {
            case 'people':
                
                break;
        
            default:
                break;
        }
    }

    async updateDetails() {
        const {type, id, getData} = this.props;

        const data = getData ? await getData(id) : await APIService.get(`${type}/${id}`);
        console.log({ data });
        this.setState({
            loading: false,
            details: data
        })
    }


    render() {
        const { details, loading } = this.state;
        const { id, type } = this.props;
        const imgPath = type === 'people' ? 'characters' : type;


        if(!id) {
            return ( 
                <div className="details card mb-3 p-3">Please, choose a character</div>
            )
        }
    
        return (
            <div className="details card mb-3">
                { loading ? <Spinner /> : <DetailsView details={details} imgPath={imgPath}/> }

                <ErrorBtn />
            </div>
        )
    }
}


const DetailsView = ({ details, imgPath }) => {
    const { name, id, imgUrl, ...rest } = details;
    const keys = Object.keys(rest);
    
    console.log({ name, id, imgUrl });
    return (
        <React.Fragment>
            <h3 className="card-header">{ name }</h3>
            <div className="card-body">
                <div className="row">
                    <div className="col-12 col-md-5 details__img">
                        <img className="rounded" src={imgUrl} alt={name} />
                    </div>

                    <div className="col-12 col-md-7">
                        <ul className="details__list list-group list-group-flush rounded">
                            { keys.map(key => {
                                return (
                                    <li className="list-group-item d-flex justify-content-between" key={key}>
                                        <span className="label">{toDefaultText(key)}:</span>
                                        <span className="value">{details[key]}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}