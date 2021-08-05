import {combineReducers} from "redux"
import citiesReducer from "./citiesReducer"
import itinerariesReducer from "./itinerariesReducer"
import activitiesReducer from "./activitiesReducer"
import createAccountReducer from "./createAccountReducer"

const rootReducer = combineReducers ({cities:citiesReducer,itineraries:itinerariesReducer, activities:activitiesReducer, users: createAccountReducer})
export default rootReducer



