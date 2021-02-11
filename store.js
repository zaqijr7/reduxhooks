const {createStore} = require('redux')

//membuar reducer
const reducer = (state = 0, action) => {
   switch (action.type) {
      case 'INCREMENT' :
         return state + 1
      case 'DECREMENT' :
         return state - 1
      default :
      return state
   }
}

//membuat store
const store = createStore(reducer)

//membuat dispatch

store.dispatch({
   type: 'DECREMENT'
})

const state = store.getState()
console.log(state);