import React from 'react'
import PropsTypes from 'prop-types'
const Users = (props) => {
    console.log(props.user)
  return (
    <div>
       <h1>{props.userName}</h1>
       <p>{props.userId}</p>
    </div>
  )
}
Users.prototype={
 //key-value
 userName:PropsTypes.string,
 userId:PropsTypes.number,
}

Users.defaultProps={
    userName:"default name",
    userId:0,
}
Users.PropsTypes={
    // user:PropsTypes.object.isRequired,
     user:PropsTypes.shape({
        id:PropsTypes.number,
        name:PropsTypes.string
     })
}
export default Users
