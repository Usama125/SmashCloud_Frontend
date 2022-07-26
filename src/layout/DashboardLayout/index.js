import React, { useState } from 'react'
import SideNav from '../SideNav';
import LOGO from '../../assets/images/logo.png'
import classNames from 'classnames';
import HashLoader from "react-spinners/HashLoader";
import { usePromiseTracker } from "react-promise-tracker";

function DashboardLayout({ children }) {

    const { promiseInProgress } = usePromiseTracker();

    const [toggle, setToggle] = useState(false);

    const onCloseClick = (e) => {
        e.preventDefault();
        setToggle(false);
    }

    const onOpenClick = (e) => {
        e.preventDefault();
        setToggle(true);
    }

    return (
        <>
            <div id="wrapper" className={classNames({ 'toggled': toggle })}>
                <aside id="sidebar-wrapper" className="scrollbar">
                    <a href="" className="d-lg-none" ><i id="close" onClick={onCloseClick} className="icon-close"></i></a>
                    <div className="text-center logo">
                        <a href="">
                            <img src={LOGO} alt="logo" />
                        </a>
                    </div>
                    <SideNav />
                </aside>
                <section id="content-wrapper" className="user-dashboard">
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a href="" className="d-lg-none" id="sidebar-toggle" onClick={onOpenClick}><i className="fa fa-bars"></i></a>
                            <ul className="navbar-nav ml-auto align-items-center">
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <a href="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Smash Cloud Assignment
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    {promiseInProgress && (
                        <div className="centered-loader">
                            <HashLoader color="#417EBF" loading={true} size={50} />
                        </div>
                    )}
                    <div className={classNames({ "fade-out": promiseInProgress, "fade-in": !promiseInProgress })}>
                        {children}
                    </div>
                </section>
            </div>
        </>
    )
}

export default DashboardLayout
