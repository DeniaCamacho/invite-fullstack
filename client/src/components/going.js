import React from "react"
import { useUsers } from "../redux/ducks/users"

export default function Going() {
  const { users, going, addGoingUsers, addNotGoingUsers } = useUsers()

  return (
    <div className="container">
      {going.map(user => {
        return (
          <div className="sinUser">
            <div className="picCont">
              <img id="Pic" alt={user.id} src={user.user.picture.large} />
            </div>
            <div className="Contact">
              <div>
                <p>Name: {user.user.name.first + " " + user.user.name.last}</p>
              </div>
              <div>
                <p>Phone: {user.user.cell}</p>
              </div>
              <div>
                <p>Email: {user.user.email}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
