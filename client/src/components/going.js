import React from "react"
import { useUsers } from "../redux/ducks/users"

export default props => {
  const { going } = useUsers()

  return (
    <div className="container">
      {going.map(person => (
        <div key={"going" + person.id} className="sinUser">
          <div className="picCont">
            <img id="Pic" alt={person.id} src={person.picture} />
          </div>
          <div className="Contact">
            <div>
              <p>Name: {person.fname + " " + person.lname}</p>
            </div>
            <div>
              <p>Phone: {person.phone}</p>
            </div>
            <div>
              <p>Email: {person.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
