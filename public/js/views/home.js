
import React from 'react';
import { Provider } from 'react-redux'
import Layout from './layout';
import App from '../containers/App'
import configureStore from '../store/configureStore'

const store = configureStore()

export default class extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Layout {...this.props}>
                    <App />
                </Layout>
            </Provider>
        );
    }
}