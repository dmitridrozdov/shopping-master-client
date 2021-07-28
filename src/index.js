import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client'

// import { ContextProvider } from './context/context'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <SpeechProvider appId='227d747d-c4d9-43dc-899b-26e7d1c722f2' language='en-US'>
        {/* <ContextProvider> */}
            <Provider store={store}>
                <App />
            </Provider>
        {/* </ContextProvider> */}
    </SpeechProvider>,

    document.getElementById('root')
);