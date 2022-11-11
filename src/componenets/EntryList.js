import React, { Component } from 'react'
import EntryRow from './EntryRow';

class EntryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: []
        }

        this.fetchEntries = this.fetchEntries.bind(this);
    }

    async fetchEntries() {
        const response = await fetch('http://localhost:8080/entries');

        if (!response.ok) {
            throw new Error('Data coud not be fetched!');
        } else {
            this.setState({ entries: response.json() });
        }
    }

    render() {
        return (
            <div className="py-20 font-mate">
                <ul>
                    <EntryRow />

                    <EntryRow />
                </ul>
            </div>
        )
    }
}

export default EntryList;
