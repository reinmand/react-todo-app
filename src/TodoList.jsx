import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  if (todos.length === 0) {
    return <p>Пока ешқандай тапсырма жоқ 🙂</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
