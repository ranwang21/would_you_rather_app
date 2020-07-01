import React, { Component } from 'react'
import Navbar from '../components/navbar'
import { Route } from 'react-router-dom'
import Login from '../containers/login'
import NewQuestion from '../containers/new-question'
import LeaderBoard from '../components/leader-board'
import Question from '../components/question'

export default class ApplicationContainer extends Component {
    render () {
        return (
            <div>

                <Navbar />
                <div className='container'>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/new-question' component={Question} />
                    <Route exact path='/leader-board' component={LeaderBoard} />
                </div>
            </div>
        )
    }
}
