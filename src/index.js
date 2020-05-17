import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import ApplicationContainer from './containers/application-container'

ReactDOM.render(

    <BrowserRouter>
        <ApplicationContainer />
    </BrowserRouter>,
    document.getElementById('root')
)
