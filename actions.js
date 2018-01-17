import C from './constants'
import { name } from './reducers';

export const putMin = (min) => 
    ({
        type: C.PUT_MIN,
        payload: min
    })

export const putMax = (max) => 
    ({
        type: C.PUT_MAX,
        payload: max
    })

export const putName = (name) => 
    ({
        type: C.PUT_Name,
        payload: name
    })