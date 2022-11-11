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
        console.log(this.state.entries);
        return (
            <div className="py-20 font-mate">
                <ul>
                    {this.state.entries.map(item => (
                        <li>
                            <EntryRow entry={item} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default EntryList;
