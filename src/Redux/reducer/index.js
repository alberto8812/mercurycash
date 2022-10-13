import { GET_COUNTRIES } from "../AllconstRedux"






const initialState = {
                        countries:[]

                     }

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_COUNTRIES:
    return { ...state, countries:payload }

  default:
    return state
  }
}
