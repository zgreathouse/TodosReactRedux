export const allTodos = state => {
  return Object.keys(state.todos).map(id => state.todos[id]);
};

export const stepsByTodoId = ({steps}, todo_id) => {
  const stepsByTodoId = [];
  Object.keys(steps).forEach( stepId => {
    const step = steps[stepId];
    if(step.todo_id === todo_id){
      stepsByTodoId.push(step);
    }
  });
  return stepsByTodoId;
};
