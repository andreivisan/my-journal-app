import React, { Component } from 'react'

class EntryRow extends Component {
  render() {
    return (
      <>
        <li className="flex justify-center gap-52 py-2 text-teal-600">
            <a href="#">7 Oct 2022</a>
            <a href="#">12:00</a>
        </li>
        <li className="flex justify-center gap-52 py-2">
            <a href="#">29 Jun 2022</a>
            <a href="#">07:00</a>
        </li>
      </>
    )
  }
}

export default EntryRow;
