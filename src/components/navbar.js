import React from 'react'
import { TEXT_NAVBAR } from '../util/variables'

export default function Navbar () {
    const TEXT = TEXT_NAVBAR

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand' href='#'>{TEXT.TITLE}</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#'>{TEXT.HOME} <span className='sr-only'>(current)</span></a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>{TEXT.NEW_QUESTION}</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>{TEXT.LEADER_BOARD}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
