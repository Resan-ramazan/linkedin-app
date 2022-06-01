import { render } from '@testing-library/react';
import './App.css';
import React, { Component, useState } from 'react';
import Users from './Users';
import Card from './Card';


export default function App() {

  const [user, setUser] = useState(undefined);

  let changeUser = (clicked) => {
    setUser(clicked);
  }

  return (
    <div classNameName="App">
      <div className="container-fluid">
        <div className="row">
          <div className='col-3'>
            <Users changeUser={(user) => { changeUser(user) }}/>
          </div>
          <div className='col-9'>
            {
              user && <Card user={user} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

