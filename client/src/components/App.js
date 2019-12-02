import React from "react"
import { useUsers } from "../hooks"
import { Invite } from "./invite"
import store from "../redux/store"
import { Provider } from "react-redux"
// import { NotGoing } from "./notGoing"
import notGoing from "./notGoing"
import going from "./going"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function App() {
  const { users } = useUsers()

  return (
    <Router>
      <Provider store={store}>
        <div>
          <div>
            <ul className="nav">
              <li>
                <Link to="/">Invite</Link>
              </li>
              <li>
                <Link to="/going">Going</Link>
              </li>
              <li>
                <Link to="/notGoing">Not Going</Link>
              </li>
            </ul>
          </div>
          <Route exact path="/" component={Invite} />
          <Route path="/going/:userId " component={going} />
          <Route path="/notgoing/:userId" component={notGoing} />
        </div>
      </Provider>
    </Router>
  )
}

export default App
