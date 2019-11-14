import React from "react"
import { useUsers } from "../hooks"
import Invite from "./invite"
import store from "../redux/store"
import { Provider } from "react-redux"
// import { NotGoing } from "./notGoing"
import NotGoing from "./notGoing"
import Going from "./going"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  const { users } = useUsers()

  console.log(users)

  return (
    <Router>
      <Provider store={store}>
        <div>
          <Route exact path="/" component={Invite} />
          <Route path="/Going/:userId " component={Going} />
          <Route path="/notGoing" component={NotGoing} />
        </div>
      </Provider>
    </Router>
  )
}

export default App
