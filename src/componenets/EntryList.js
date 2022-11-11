import React, { Component } from 'react'
import EntryRow from './EntryRow';

class EntryList extends Component {
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
