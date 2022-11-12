import React, { Component } from 'react'
import EntryRow from './EntryRow';

class EntryList extends Component {
    constructor(props) {
        super(props);

        this.state = { entries: [] };
    }

    componentDidMount() {
        fetch(`http://localhost:8080/entries`)
            .then(res => res.json())
            .then(json => this.setState({ entries: json }));
    }

    render() {
        return (
            <div className="py-20 font-mate">
                <ul>
                    {this.state.entries.map(item => (
                        <EntryRow entry={item} key={item.id}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default EntryList;
