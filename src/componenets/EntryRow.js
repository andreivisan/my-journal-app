import React, { Component } from 'react'

class EntryRow extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        date: '',
        time: ''  
      }

      this.formatDate = this.formatDate.bind(this);
      this.formatTime = this.formatTime.bind(this);
  }

  componentDidMount() {
    this.formatDate();
    this.formatTime();
  }

  formatDate() {
    let date = new Date(this.props.entry.createdOn);
    const day = date.toLocaleString('default', { day: '2-digit' });
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    this.setState({ date: day + ' ' + month + ' ' + year });
  }

  formatTime() {
    let date = new Date(this.props.entry.createdOn);
    const hour = date.toLocaleString('default', { hour: '2-digit' });
    const minute = date.toLocaleString('default', { minute: '2-digit' });
    this.setState({ time: hour + ':' + minute });
  }

  render() {
    return (
      <>
        <li className="flex justify-center gap-52 py-2">
            <a href="#">{this.state.date}</a>
            <a href="#">{this.state.time}</a>
        </li>
      </>
    )
  }
}

export default EntryRow;
