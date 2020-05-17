import React, { Component } from 'react'
import Navbar from '../components/navbar'
import { Route } from 'react-router-dom'
import Login from '../containers/login'
import NewQuestion from '../components/new-question'
import LeaderBoard from '../components/leader-board'

export default class ApplicationContainer extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <Route path='/home' component={Login} />
                <Route path='/new-question' component={NewQuestion} />
                <Route path='/leader-board' component={LeaderBoard} />
            </div>
        )
    }
}
