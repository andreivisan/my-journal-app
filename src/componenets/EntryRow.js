import React, { Component } from 'react'

class EntryRow extends Component {
  constructor(props) {
      super(props);
      this.state = { }
  }

  render() {
    return (
      <>
        <li className="flex justify-center gap-52 py-2">
            <a href="#">{this.props.entry.createdOn}</a>
            {/* <a href="#">12:00</a> */}
        </li>
      </>
    )
  }
}

export default EntryRow;
