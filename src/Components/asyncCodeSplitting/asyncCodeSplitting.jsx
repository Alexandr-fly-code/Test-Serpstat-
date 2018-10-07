import React, {Component} from 'react';
import './asyncCodeSplitting.css';


const asyncCodeSplitting = ({loader, loading: Loading}) => {


return class AsyncCodeSplitting extends Component {

    state = {
        component: null,
    };

    componentDidMount () {

        loader().then(({default: component}) => {
            this.setState({component});
        });
    }

    render() {
        const {component: LoadedComponent} = this.state;
        return LoadedComponent ? <LoadedComponent {...this.props}></LoadedComponent> : <h1 className='loading'>Loading</h1>;
    }
}
};

export default asyncCodeSplitting;
