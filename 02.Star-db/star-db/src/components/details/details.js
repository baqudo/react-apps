import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBtn from '../error-btn';
import './details.scss';

export default class Details extends Component {

    componentDidMount() {
        this.updateDetails()
    }

    componentDidUpdate(prevProps) {
        if(this.props.id !== prevProps.id || this.props.getData !== prevProps.getData) {
            this.updateDetails()
        }
    }
    

    state = {
        loading: true,
        details: {}
    }

    async updateDetails() {
        const {id, getData} = this.props;
        if (!id || !getData) return;

        const data = await getData(id);

        this.setState({
            loading: false,
            details: data
        })
    }


    render() {
        const { details, loading } = this.state;
        const { id } = this.props;

        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item: details });
        })

        if(!id) {
            return ( 
                <div className="details card mb-3 p-3">Please, choose a character</div>
            )
        }
    
        return (
            <div className="details card mb-3">
                { loading ? <Spinner /> : <DetailsView details={details} body={children}/> }

                <ErrorBtn />
            </div>
        )
    }
}


const DetailsView = ({ details, body }) => {
    const { name, imgUrl } = details;

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
                            { body }
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
