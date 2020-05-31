import React, { PureComponent } from 'react';
import './Sidebar.css';
import Sidebaritems from './Sidebaritems'

class Sidebar extends PureComponent {
    constructor(){
        super()
        this.state = {
            sidebar: [
                { id: 1, src: 'dashboard@3x', title: 'dashboard', description: 'bar', active: false },
                { id: 2, src: 'calender_3@3x', title: 'dashboard', description: 'bar', active: true },
                { id: 3, src: 'people@3x', title: 'dashboard', description: 'bar', active: false },
                { id: 4, src: 'mail@3x', title: 'dashboard', description: 'bar', active: false },
                { id: 5, src: 'reports@3x', title: 'dashboard', description: 'bar', active: false },
                { id: 6, src: 'settings@3x', title: 'dashboard', description: 'bar', active: false }
              ]
        }
    }
    handleClick = (item)  => e => {
        e.preventDefault();
        console.log('item:', item)
        this.setState(prevState => {
            return {
                sidebar: [...prevState.sidebar.map(x => {
                    x.active = x.id === item.id ? true : false;
                    return x;
                })]
            }
        })
    }
    render(){
        const menutiems = this.state.sidebar.map((item , i) => (
            <li key={i}>
                <a className={item.active ? "is-active" : ""} key={item.id} onClick={this.handleClick(item)}>
                        <figure className="image is-32x32">
                            <img src={require(`./../images/icons/${item.src}.png`)} alt={item.title}/>
                        </figure>
                </a>
            </li>
        ))
        return (
            <aside className="menu ">
                <ul className="menu-list">
                    {menutiems}
                </ul>
            </aside>
        );
    }
   
}

export default Sidebar;
