import React from "react";

interface Todo { 
  text: string;
  complete: boolean;
}

interface Props {
     todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({todo}) => {
    return (
   <li>
       <label style={{ textDecoration: todo.complete? 'line-through' : undefined }}>
       <input 
       type="checkbox" checked={todo.complete}
       onClick={() => {
           toggleTodo(todo);
       }}
       /> {''}
       {todo.text}
       </label>
   </li>
    );
};