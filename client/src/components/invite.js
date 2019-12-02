import React from "react"
import { useUsers } from "../hooks"
import "../styles/invite.css"
import Icon from "../lib/Icon"
import { Link } from "react-router-dom"

export const Invite = props => {
  const { users, go, no, loading, going, notgoing } = useUsers()

  // function handleAdd(going) {
  //   addGoingUsers(going)
  // }

  return (
    <div className="container">
      <p>
        Going:{going.length} NotGoing:{notgoing.length}
      </p>
      {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
      <div>
        <p>
          <img src={users.picture} />
        </p>
        <p>
          Name: {users.fname} {users.lname}
        </p>
        <p>Phone: {users.phone}</p>
        <p>Email:{users.email}</p>
        <button className="NotGoing" onClick={e => no(users)}>
          {" "}
          <Icon icon="times"></Icon>
        </button>
        <button className="Going" onClick={e => go(users)}>
          {" "}
          <Icon icon="check"></Icon>
        </button>
      </div>
      {/* )} */}
    </div>
  )
}

{
  /* {users.map((user, i) => (
      <div className="sinUser" key={`User-${i}`}>
        <div className="picCont">
          <img id="Pic" alt={paerson.id} src={person.picture.large} />
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
              <Link key={e.id} to={"/notGoing/" + e.id}>
                <button className="Not Going" onClick={e => handleAdd(user)}>
                  {" "}
                  <Icon icon="times"></Icon>
                </button>
              </Link>
              <Link key={e.id} to={"/Going/" + e.id}>
                <button className="Going" onClick={e => handleAdd(user)}>
                  <Icon icon="check"></Icon>
                </button>
              </Link>
            </>
          ))}
        </div>
      </div>
      ))} */
}
