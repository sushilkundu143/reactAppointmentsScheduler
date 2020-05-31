import React, {PureComponent} from 'react';
import './Content.css';

class Content extends PureComponent {
    constructor() {
        super()
        this.state = {
            navbutton: [
                {
                    id: 1,
                    src: 'add',
                    title: 'New',
                    description: 'New',
                    active: true
                }, {
                    id: 1,
                    src: 'task_2',
                    title: 'Waitlist',
                    description: 'Waitlist',
                    active: false
                }, {
                    id: 1,
                    src: 'filters',
                    title: 'Filter',
                    description: 'Filter',
                    active: false
                }, {
                    id: 1,
                    src: 'next-date_2',
                    title: 'Today',
                    description: 'Today',
                    active: false
                },
                {
                    id: 1,
                    src: 'calender_2',
                    title: '08 Mar 2020',
                    description: '08 Mar 2020',
                    active: false
                },
                {
                    id: 1,
                    src: 'adjust',
                    title: 'list',
                    description: 'List',
                    active: false
                },
                {
                    id: 1,
                    src: 'settings',
                    title: 'More Options',
                    description: 'More Options',
                    active: false
                }
            ]
        }
    }
    render() {
        const buttonnav = this
            .state
            .navbutton.map((button, i) => (
                <button className="button is-dark" key={i}>
                    <span className="icon is-small">
                        <figure className="image is-16x16">
                            <img src={require(`./../images/icons/${button.src}.png`)} alt={button.title}/>
                        </figure>
                    </span>
                    <small>{button.title}</small>
                </button>
            ))
        return (
            <div className="columns is-multiline">
                <div className="column is-full">
                    <div className="buttons has-addons is-centered is-dark">
                        {buttonnav}
                    </div>
                </div>
            </div>
        )
    }

}

export default Content