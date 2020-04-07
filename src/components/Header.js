import React, { Component } from 'react'
import CounterButton from './CounterButton'

class Header extends Component {

    render(){
        console.log('HEADER')
        return (
            <div>
                <h1 className='f1'>USERS</h1>
                <CounterButton color={'red'}></CounterButton>

            </div>
        )
    }
}

export default Header