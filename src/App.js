import React, { createContext, useState } from 'react';
import SignIn from './components/sign/SignIn';
import Teacher from './components/profile/teacher/Teacher';
import Status from './components/status/Status'
import Attendence from './components/attendance/Attendence';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Search from './components/search/Search';
import Navbar from './components/navbar/Navbar';

export const globalContext = createContext();

function App() {
  const [classNew, setClassNew] = useState([]);
  const [login, setLogin] = useState(false);
  return (
    <>
      <globalContext.Provider value={{ classNew, setClassNew, login, setLogin }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<SignIn />} />
          {
            login &&
            <>
              <Route path='/profile' element={<Teacher />} />
              <Route path='/status' element={<Status />} />
              <Route path='/attendance' element={<Attendence />} />
              <Route path='/search' element={<Search />} />
            </>
          }
        </Routes>
      </globalContext.Provider>
    </>
  );
}

export default App;
