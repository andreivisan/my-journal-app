import { Link } from "react-router-dom";
import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
    <div className="flex justify-center gap-16 font-vollkorn">
        <Link to="">Entries</Link>
        <Link to="">Drafts</Link>
        <Link to="">New Posts</Link>
      </div>
    )
  }
}

export default Menu;
