import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USERS = "users/GET_USERS"
const SET_GOING = "users/SET_GOING"
const SET_NOTGOING = "users/SET_NOTGOING"
const LOADING = "users/LOADING"
const FINISHED = "users/FINISHED"

// initial state
const initialState = {
  users: {},
  going: [],
  notgoing: [],
  loading: false
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case SET_GOING:
      return { ...state, going: [...state.going, action.payload] }
    case SET_NOTGOING:
      return { ...state, notgoing: [...state.notgoing, action.payload] }
    case LOADING:
      return { ...state, loading: true }
    case FINISHED:
      return { ...state, loading: false }
    default:
      return state
  }
}

// action creators
function getUsers() {
  return dispatch => {
    dispatch({
      type: LOADING
    })
    axios.get("/users/users").then(resp => {
      dispatch({
        type: GET_USERS,
        payload: resp.data
      })
      dispatch({
        type: FINISHED
      })
    })
  }
}
// const getGoing = () => {
//   return dispatch => {
//     axios.get("/users/going").then(resp => {
//       dispatch({
//         type: SET_GOING,
//         payload: resp.data
//       })
//     })
//   }
// }
// const getNotGoing = () => {
//   return dispatch => {
//     axios.get("/users/notgoing").then(resp => {
//       dispatch({
//         type: SET_NOTGOING,
//         payload: resp.data
//       })
//     })
//   }
// }

function setGoing(person) {
  return dispatch => {
    axios.post("/users/going", person).then(resp => {
      dispatch({
        type: SET_GOING,
        payload: resp.data
      })
      dispatch(getUsers())
    })
  }
}

const setNotGoing = person => {
  return dispatch => {
    axios.post("/users/notGoing", person).then(resp => {
      dispatch({
        type: SET_NOTGOING,
        payload: resp.data
      })
      dispatch(getUsers())
      // dispatch(getNotGoing())
    })
  }
}

// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  const dispatch = useDispatch()
  const going = useSelector(appState => appState.userState.going)
  const notgoing = useSelector(appState => appState.userState.notgoing)
  const go = person => dispatch(setGoing(person))
  const no = person => dispatch(setNotGoing(person))
  const get = () => dispatch(getUsers())
  const loading = useSelector(appState => appState.userState.loading)

  useEffect(() => {
    get()
    // dispatch(setNotGoing())
    // dispatch(setGoing())
  }, [])

  return { users, going, notgoing, go, no, get, loading, dispatch }
}
