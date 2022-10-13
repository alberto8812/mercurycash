import { GET_COUNTRIES,POST_USERDATA } from "../AllconstRedux"






const initialState = {
                        countries:[]

                     }

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_COUNTRIES:
    return { ...state, countries:payload }
  
    case POST_USERDATA:
      
    return  state

  default:
    return state
  }
}
