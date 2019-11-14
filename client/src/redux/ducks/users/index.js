import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USERS = "users/GET_USERS"
const SHOW_GOING = "users/SHOW_GOING"
const SHOW_NOTGOING = "users/SHOW_NOTGOING"

// initial state
const initialState = {
  users: [],
  going: [],
  notGoing: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case SHOW_GOING:
      return { ...state, going: action.payload }
    case SHOW_NOTGOING:
      return { ...state, notGoing: action.payload }
    default:
      return state
  }
}

// action creators
const getUsers = () => {
  return dispatch => {
    axios.get("https://randomuser.me/api/?results=1").then(resp => {
      dispatch({
        type: GET_USERS,
        payload: resp.data.results
      })
    })
  }
}
// const getGoing = () => {
//   return dispatch => {
//     axios.get("/users/going").then(resp => {
//       console.log(resp)
//       dispatch({
//         type: SHOW_GOING,
//         payload: resp.data
//       })
//     })
//   }
// }
const addGoing = user => {
  return dispatch => {
    axios.post("/users/going", { user }).then(resp => {
      dispatch(showGoingUsers(resp.data))
    })
  }
}

const showGoingUsers = () => {
  return dispatch => {
    axios.get("/users/going").then(resp => {
      dispatch({
        type: SHOW_GOING,
        payload: resp.data
      })
    })
  }
}
const showNotGoingUsers = () => {
  return dispatch => {
    axios.get("/users/notGoing").then(resp => {
      dispatch({
        type: SHOW_NOTGOING,
        payload: resp.data
      })
    })
  }
}

const addNotGoing = user => {
  return dispatch => {
    axios.post("/users/notGoing", { user }).then(resp => {
      dispatch(showNotGoingUsers(resp.data))
    })
  }
}
// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  const dispatch = useDispatch()
  const going = useSelector(appState => appState.userState.going)
  const notGoing = useSelector(appState => appState.userState.notGoing)
  const addGoingUsers = going => dispatch(addGoing(going))
  const addNotGoingUsers = notGoing => dispatch(addNotGoing(notGoing))

  useEffect(
    user => {
      dispatch(getUsers())
      dispatch(showGoingUsers())
      dispatch(showNotGoingUsers())
    },
    [dispatch]
  )

  return { users, going, addGoingUsers, addNotGoingUsers }
}
