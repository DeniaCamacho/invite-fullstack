import React from "react"
import { useUsers } from "../redux/ducks/users"

export default props => {
  const { notgoing } = useUsers()

  return (
    <div className="container">
      {notgoing.map(user => (
        <div key={"notgoing" + user.id} className="sinUser">
          <div className="picCont">
            <img id="Pic" alt={user.id} src={user.picture} />
          </div>
          <div className="Contact">
            <div>
              <p>
                Name: {user.fname}
                {user.lname}
              </p>
            </div>
            <div>
              <p>Phone: {user.phone}</p>
            </div>
            <div>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
