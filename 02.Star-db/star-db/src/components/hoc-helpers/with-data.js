import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBoundary from '../error-boundry';

const withData = (View) => {
    return class extends Component {
        state = {
            loading: true,
            items: []
        }
    
        componentDidMount() {
            this.update();
        }
        
        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }
    
        async update() {
            const items = await this.props.getData();
    
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

export default withData;