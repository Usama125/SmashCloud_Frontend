import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ROUTES from '../../constants';

function SideNav() {
    const location = useLocation();
    
    return (
        <ul class="sidebar-nav">
            <li class={ROUTES.ENTRY_ROUTE === location.pathname ? "active" : ""}>
                <Link to={ROUTES.ENTRY_ROUTE}><span class="icon-dashboard"></span> Entery</Link>
            </li>
            <li class={ROUTES.EXIT_ROUTE === location.pathname ? "active" : ""}>
            <Link to={ROUTES.EXIT_ROUTE}><span class="icon-dashboard"></span> Exit</Link>
            </li>
        </ul>
    )
}

export default SideNav
