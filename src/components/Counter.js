import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Roster} from './Roster'
import {Schedule} from './Schedule'
import {Home} from './Home'
export const Counter = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule>' component={Schedule}/>
        </Switch>
    </main>
)

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/roster'>Roster</Link></li>
                    <li><Link to='/schedule'>Schedule</Link></li>
                </ul>
            </nav>
        </header>
    )
}