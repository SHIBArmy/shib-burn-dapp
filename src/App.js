import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import Navigator from './components/Navigator';
import Burner from './components/Burner';
import { warningSelector } from './store/selectors';


function App() {

  const dispatch = useDispatch();
  const warning = useSelector(warningSelector)

  return (
    <div className="App">
      <Navigator/>
      {warning ? "we have a warning" : "No Warning"}
      <Burner/>
   
    </div>
  );
}

export default App;
