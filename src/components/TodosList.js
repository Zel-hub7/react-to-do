import TodoItem from "./TodoItem";
const TodosList = ({todosProps, setTodos,delTodo}) => {
    return (
      <ul>
        {todosProps.map((todo) => (
         <TodoItem delTodo={delTodo} key = {todo.id} itemProp={todo} setTodos ={setTodos}
          /> 
          
        ))}
      </ul>
    );
  };
export default TodosList;