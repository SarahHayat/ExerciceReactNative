const initialState = {
  todoList: [],
};
const addTodo = (state, action) => {
  let copy = [...state.todoList];
  copy.push(action.value);
  return {
    ...state,
    todoList: copy,
  };
};
const removeTodo = (state, action) => {
  let copy = state.todoList.filter(o => action.id !== o.id);
  return {
    ...state,
    todoList: copy,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return addTodo(state, action);
    case 'remove':
      return removeTodo(state, action);
    default:
      return state;
  }
};

export default reducer;
