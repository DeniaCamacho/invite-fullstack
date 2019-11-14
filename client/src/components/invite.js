import React from "react"
import { useUsers } from "../hooks"
import "../styles/invite.css"
import Icon from "../lib/Icon"
import { Link } from "react-router-dom"

const Invite = props => {
  const { users, going, addGoingUsers, addNotGoingUsers } = useUsers()

  function handleAdd(going) {
    addGoingUsers(going)
  }

  return (
    <div className="container">
      {users.map((user, i) => (
        <div className="sinUser" key={`User-${i}`}>
          <div className="picCont">
            <img id="Pic" alt={user.id} src={user.picture.large} />
          </div>
          <div className="Contact">
            <div>
              <p>Name: {user.name.first + " " + user.name.last}</p>
            </div>
            <div>
              <p>Phone: {user.cell}</p>
            </div>
            <div>
              <p>Email: {user.email}</p>
            </div>
          </div>
          <div className="buto">
            {users.map(e => (
              <>
                <Link key={e.id} to={"/going/" + e.id}>
                  <button className="Going" onClick={e => handleAdd(user)}>
                    <Icon icon="times"></Icon>
                  </button>
                </Link>
                <Link key={e.id} to={"/notGoing/" + e.id}>
                  <button className="Not Going" onClick={e => handleAdd(user)}>
                    <Icon icon="check"></Icon>
                  </button>
                </Link>
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Invite
