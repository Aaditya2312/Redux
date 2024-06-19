import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import styled from 'styled-components'
import { fakeUserData } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser, deleteUser } from './Store/Slices/UserSlice'


const UserDetails = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.users
  })

  const addNewUser = (payload) => {
    console.log(payload)
    dispatch(addUser(payload))
  }

  const deleteSingleUser = (payload) => {
    dispatch(removeUser(payload))
  }

  const clearAll = () => {
    dispatch(deleteUser())
  }
  return (
    <Wrapper>
      <div className='content'>
        <div className='admin-table'>
          <div className='admin-subtitle'>
            List of user details
          </div>
          <button className='btn add-btn' onClick={() => { addNewUser(fakeUserData()) }}>Add User</button>
        </div>
        <ul>
          {data.map((users, index) => (
            <li key={index}>
              {users}
              <button className='btn-delete' onClick={() => deleteSingleUser(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <hr />
        <div>
          <button onClick={() => clearAll()}>Delete all Users</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .btn-delete{
  padding:5px
  }

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails
