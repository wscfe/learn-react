import React from 'react';
import { UserContextCompo } from './store/user-context'
import {Manage} from './pages/manage/index'
import {Home} from './pages/Home/index'
import './App.css';

function App() {
  return (
    <UserContextCompo>
      <Manage />
      <Home />
    </UserContextCompo>
  );
}

export default App;
