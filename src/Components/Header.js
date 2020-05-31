import React, {PureComponent} from 'react';
import './Header.css';
import user from './../images/user1.png'

class Header extends PureComponent {
    constructor(){
        super()
        this.state = {
            navbarendicons: [
                { id: 1, src: 'expiry@3x', title: 'dashboard', description: 'bar', active: false },
                { id: 2, src: 'task@3x', title: 'Task', description: 'Task', active: false },
                { id: 3, src: 'notification@3x', title: 'Notification', description: 'Notification', active: false },
                { id: 4, src: 'profile@3x', title: 'Profile', description: 'Profile', active: false }
              ]
        }
    }
    handleClick = (item)  => e => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                navbarendicons: [...prevState.navbarendicons.map(x => {
                    x.active = x.id === item.id ? true : false;
                    return x;
                })]
            }
        })
    }
    render() {
        const menutiems = this.state.navbarendicons.map((item , i) => (
            <div className="navbar-item" key={i}>
                <a className="" href=""  onClick={this.handleClick(item)}>
                    <figure className="image is-32x32">
                        <img src={require(`./../images/icons/${item.src}.png`)} alt={item.title}/>
                    </figure>
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

                <div id="navMenu" className="navbar-menu column is-hidden-touch">
                    <div className="navbar-end">
                    <div class="select">
                    <select>
                        <option>5 Active Tabs</option>
                        <option>With options</option>
                    </select>
                    </div>
                    {menutiems}
                    </div>
                </div>
            </nav>
        );
    }

}

export default Header;
