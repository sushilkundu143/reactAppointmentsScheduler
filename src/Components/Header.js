import React, {PureComponent} from 'react';
import './Header.css';

class Header extends PureComponent {
    constructor() {
        super()
        this.state = {
            navbarendicons: [
                {
                    id: 1,
                    src: 'expiry@3x',
                    title: 'dashboard',
                    description: 'bar',
                    active: false
                }, {
                    id: 2,
                    src: 'task@3x',
                    title: 'Task',
                    description: 'Task',
                    active: false
                }, {
                    id: 3,
                    src: 'notification@3x',
                    title: 'Notification',
                    description: 'Notification',
                    active: false
                }, {
                    id: 4,
                    src: 'profile@3x',
                    title: 'Profile',
                    description: 'Profile',
                    active: false
                }
            ]
        }
    }
    handleClick = (item) => e => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                navbarendicons: [
                    ...prevState
                        .navbarendicons
                        .map(x => {
                            x.active = x.id === item.id
                                ? true
                                : false;
                            return x;
                        })
                ]
            }
        })
    }
    render() {
        const menutiems = this
            .state
            .navbarendicons
            .map((item, i) => (
                <div className="navbar-item" key={i}>
                    <a className="" href="" onClick={this.handleClick(item)}>
                        <span className="icon is-medium">
                        <figure className="image is-24x24">
                            <img src={require(`./../images/icons/${item.src}.png`)} alt={item.title}/>
                        </figure>
                        </span>
                    </a>
                </div>
            ))
        return (
            <nav
                className="navbar columns theme-header is-fixed-top"
                role="navigation"
                aria-label="main navigation"
                id="app-header">
                <div className="navbar-brand padding">
                    <a className="navbar-item" href="">
                        SC
                    </a>
                    <a
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="touchMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navMenu" className="navbar-menu is-hidden-touch">
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link has-text-white" href="">
                                Sydney Clinic
                            </a>
                            <div className="navbar-dropdown is-boxed">
                                <a className="navbar-item" href="">
                                    Sydney Clinic 1
                                </a>
                                <a className="navbar-item" href="">
                                    Sydney Clinic 2
                                </a>
                            </div>
                        </div>
                        <div className="navbar-item">
                            <div className="select custom">
                                <select className="has-background-dark">
                                    <option>5 Active Tabs</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                        <div className="navbar-item">
                            <span className="icon is-medium has-background-dark">
                                <figure className="image is-16x16">
                                    <img src={require(`./../images/icons/add_2@2x.png`)} alt=""/>
                                </figure>
                            </span>
                        </div>
                        <div className="navbar-item">
                            <span className="icon is-medium has-background-dark">
                                <figure className="image is-16x16">
                                    <img src={require(`./../images/icons/search@2x.png`)} alt=""/>
                                </figure>
                            </span>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item border-r">
                            <span className="icon is-medium">
                            <figure className="image is-24x24">
                                <img src={require(`./../images/icons/clock@3x.png`)} alt=""/>
                            </figure>
                            </span>
                            <span className="has-text-white">11:15 AM</span>
                        </div>
                        {menutiems}
                    </div>
                </div>
            </nav>
        );
    }

}

export default Header;
