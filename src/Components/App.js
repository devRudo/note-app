import React from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import List from './List';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <List />
      </div>
    );
  }
}

export default App;
