import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBoundary from '../error-boundry';

const dataWrapper = (View, getData) => {
    return class extends Component {
        state = {
            loading: true,
            items: []
        }
    
        componentDidMount() {
            this.init();
        }
        
    
        async init() {
            const items = await getData();
    
            this.setState({
                loading: false,
                items
            })
        }

        render() {
            const { items, loading } = this.state;

            if (loading) return (<Spinner />);
    
            return (
                <ErrorBoundary>
                    <View {...this.props} items={items} />
                </ErrorBoundary>
            )
        }
    };
};

export default dataWrapper;