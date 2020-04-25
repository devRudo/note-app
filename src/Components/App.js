import React from 'react';
import './App.css';
import Header from './Layouts/Header';
import Notes from './Notes/Notes';

const App = () => {
  return (
    <div className="App bg-light">
      <Header />
      <Notes />
    </div>
  );
}

export default App;
