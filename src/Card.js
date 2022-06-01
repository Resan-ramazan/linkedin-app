import React, { Component } from 'react'
import UsersInfo from './Users'


const Card = ({ user }) => {
  const fullname = `${user.first_name} ${user.last_name}`;
  const location = `${user.country} , ${user.city}`
  return (
    <div className="card mt-4" >
      <img src={user.image} width={250} alt={`${user.name}'s profile picture.`} />
      <div className='row pa-4'>
        <div className='col-8'>
          <div className="card-body">
            <notranslate>
              <h2 className="card-title">{fullname}</h2>
            </notranslate>
            <p className="card-text">{user.job_title}
              <br />
              <span className='card-text gray'>{location}</span>
            </p>
          </div>
        </div>
        <div className='col-4'>
          <h5>🏢{user.company}</h5>
          <p>💰{user.salary}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;