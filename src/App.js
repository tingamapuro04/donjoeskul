import React from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import AdmitStudent from './components/AdmitStudent';
import { addStudent } from './store/Student/studentSlice';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <AdmitStudent />
      <button onClick={() => dispatch(addStudent())} >Increnent</button>
    </div>
  );
}

export default App;
