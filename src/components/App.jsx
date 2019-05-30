import React, { Component } from 'react';
import NewTaskForm from './NewTaskForm';
import Tasks from './Tasks';

import './App.css';

const App = () => {
  return (

    <div className='col-6 mx-auto'>
      <h1 className='text-center mt-5'>Redux To-Do List</h1>
      <NewTaskForm />
      <Tasks />
    </div>
  )
}

export default App;
