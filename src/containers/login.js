import React, { Component } from 'react'
import { TEXT_LOG_IN_PAGE } from '../util/variables'

export default class Login extends Component {
    render () {
        return (
            <div className='mt-4'>
                <h2 className='text-center'>{TEXT_LOG_IN_PAGE.WELCOME}</h2>
                <form>
                    <div className='form-group'>
                        <label for='users'>{TEXT_LOG_IN_PAGE.SIGN_IN}</label>
                        <select className='form-control' id='users'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <button type='submit' className='btn btn-primary'>{TEXT_LOG_IN_PAGE.SIGN_IN_BUTTON}</button>
                </form>
            </div>
        )
    }
}
