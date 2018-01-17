import C from '../constants'
import appReducer from '../reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('Name', store.getState().name)
	result = next(action)

	let { name, min, max } = store.getState()

	console.log(`

		Name: ${name}
		min: ${min}
		max: ${max}
	`)

	console.groupEnd()
	return result

}

export default (initialState={}) => {
	return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}

