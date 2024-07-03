import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo, }: {
    todo: { id: string; title: string };
    // deleteTodo: (id: string) => void;
    // setTodo: (todo: { id: string; title: string }) => void;
  }) {
    const dispatch = useDispatch();

    return (
      // <li key={todo.id} className="list-group-item">
      //   <button onClick={() => deleteTodo(todo.id)}
      //           id="wd-delete-todo-click"> Delete </button>
      //   <button onClick={() => setTodo(todo)}
      //           id="wd-set-todo-click"> Edit </button>
      //   {todo.title}
      // </li>
      <li key={todo.id}
            className="list-group-item d-flex justify-content-end flex-row-reverse gap-3 float-end">
            <button className="btn btn-danger float-end " onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click"> Delete
            </button>
            <button className="btn btn-primary float-end " onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"> Edit
            </button>
            {todo.title}
        </li>
    );
  }
