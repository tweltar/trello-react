import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import NavOne from './component/NavOne';
import NavTwo from './component/NavTwo';
import Wrapper from './component/Wrapper';

function App() {
  return (
    <div className="App">
      <NavOne />
      <NavTwo />
      <Wrapper />
    </div>
  );
}

export default App;
