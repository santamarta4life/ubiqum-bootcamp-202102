import {combineReducers} from "redux"
import citiesReducer from "./citiesReducer"
import itinerariesReducer from "./itinerariesReducer"
import activitiesReducer from "./activitiesReducer"
import createAccountReducer from "./createAccountReducer"
import registerReducer from "./registerReducer"

const rootReducer = combineReducers ({cities:citiesReducer,itineraries:itinerariesReducer, activities:activitiesReducer, user: createAccountReducer, account: registerReducer})
export default rootReducer



