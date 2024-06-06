import React, { useContext }from 'react'
import userContext from '../context/userContextProvider'

function Profile() {
    const {user}= useContext(userContext)

    if (!user) return <h1>Not Logged In</h1>
  return (
    
    <div>
     
      <h1> profile:{user.username}</h1>
    </div>
  )
}

export default Profile
