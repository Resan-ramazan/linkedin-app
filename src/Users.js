import React, { Component, useState } from 'react'
import userData from './New.json';

const User = ({ changeUser }) => {
    const [filteredUsers, setFilteredUsers] = useState(userData)

    const applyGenderFilter = (genderOption = undefined) => {
        if (!genderOption) {
            setFilteredUsers(userData);
            return;
        }
        const filteredTemp = userData.filter((user) => user.gender === genderOption)
        setFilteredUsers(filteredTemp)
    }

    const applyNameSearch = (event) => {
        const newInput = event.target.value.toLowerCase()
        const filteredName = userData.filter((user) => user.first_name.toLowerCase().includes(newInput))
        setFilteredUsers(filteredName)
        // setInputName(newInput)       
    }
    const randomUSer = () => {
        const randomNumber = Math.floor(Math.random() * userData.length);
        changeUser(userData[randomNumber]);
    }

    return (
        <div className="list-group mt-4 px-4">
            <button onClick={randomUSer} type='button' className='btn btn-info mb-4'>Random</button>

            <div class="btn-group mb-4" role="group" aria-label="Basic mixed styles example">
                <button onClick={() => { applyGenderFilter("Male") }} type="button" class="btn btn-primary">Man</button>
                <button onClick={() => { applyGenderFilter("Female") }} type="button" class="btn btn-warning">Woman</button>
                <button onClick={() => {applyGenderFilter()}} type="button" class="btn btn-success">All</button>
            </div>
            <div class="input-group mb-4">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input onChange={(event) => { applyNameSearch(event) }} type="text" class="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            {
                filteredUsers.map(user => {
                    return (
                        <a
                            onClick={() => { changeUser(user) }}
                            key={user.id} href="#" className="list-group-item list-group-item-action">{user.first_name} {user.last_name}</a>
                    )
                })
            }
        </div>
    )
}
export default User;

