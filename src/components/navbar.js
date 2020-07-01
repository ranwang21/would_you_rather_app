import React from 'react'
import { TEXT_NAVBAR } from '../util/variables'
import { Link } from 'react-router-dom'

export default function Navbar () {
    const TEXT = TEXT_NAVBAR

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <Link className='navbar-brand' to='/'>{TEXT.TITLE}</Link>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/'>{TEXT.HOME} <span className='sr-only'>(current)</span></Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/new-question'>{TEXT.NEW_QUESTION}</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/leader-board'>{TEXT.LEADER_BOARD}</Link>
                        </li>
                    </ul>
                </div>

                <div className='nav navbar-nav navbar-right'>
                    <div className='nav-link'>welcome, Ran</div>
                    <Link className='nav-link' to='/logout'>{TEXT.LOG_OUT}</Link>
                </div>
            </nav>
        </div>
    )
}
