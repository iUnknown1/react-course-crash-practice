import './Todo.css'

function Todo({ title, onTodoDelete}) {
 return (
        <div className="todo">
     <h2>{ title }</h2>
     <button onClick={onTodoDelete}>Delete</button>
  </div>
    )
}

export default Todo