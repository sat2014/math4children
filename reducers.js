import C from './constants'
import { combineReducers } from 'redux'

export const min = (state=0, action) => 
	(action.type === C.PUT_MIN) ? 
		 parseInt(action.payload) :
         state

export const max = (state=9, action) => 
	(action.type === C.PUT_MAX) ? 
		 parseInt(action.payload) :
         state

export const name = (state=0, action) => 
	(action.type === C.PUT_NAME) ? 
		 action.payload :
         state

export const min_value = (state = {}, action) => {  
  switch (action.type) {
    case 'GET_MIN':
      return action.min_value;
    default:
      return state;
  }
}

export const max_value = (state = {}, action) => {  
    switch (action.type) {
      case 'GET_MAX':
        return action.max_value;
      default:
        return state;
    }
  }

export const name_value = (state = {}, action) => {  
    switch (action.type) {
      case 'GET_NAME':
        return action.name_value;
      default:
        return state;
    }
  }

export default combineReducers({
    name,
    min,
    max,
    name_value,
    min_value,
    max_value  
  })
         
