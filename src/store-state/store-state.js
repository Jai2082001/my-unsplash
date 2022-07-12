import { createStore } from 'redux'

const counterReducer = (state = {images: []}, action) => {
    if (action.type === 'add') {
        const prevState = state.images;
        prevState.push(action.item)
        return {
            images: prevState
        }
    }
    if (action.type === 'remove') {
        let prevState = state.images
        if (!prevState) {
            return prevState
        } else {
            prevState = prevState.filter((element) => {
              return element.id !== action.item.id 
            })
            return {
                images: prevState
            }
        }
    }
    return state
}

const store = createStore(counterReducer)

export default store