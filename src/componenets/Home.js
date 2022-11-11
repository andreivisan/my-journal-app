import React, { Component } from 'react'
import EntryList from './EntryList';
import Menu from './Menu';

class Home extends Component {
  render() {
    return (
      <div className="">
        <head>
          <title>My Journal</title>
        </head>
      
        <main>
          <div className="min-h-screen">
            <div className="text-center p-10 ">
              <h1 className="text-5xl py-2 font-bold font-vollkorn">MyJournal</h1>
            </div>
            
            <Menu />

            <EntryList />
          </div>
        </main>
      </div>
    )
  }
}

export default Home;
