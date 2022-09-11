
const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      console.log(action.text)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complete: false
        }
      ]
    default:
      return state
  }
}
export default todos
