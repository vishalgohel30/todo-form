import React, { memo } from "react";
import { TodoInput } from "./TodoInput";
import TodoItems from "./TodoItems";

const CompoentObj = {
  inputTodo: TodoInput,
  todoText: TodoItems,
};

 function TodoItemList({
  todoItems,
  isEdit,
  handleChange,
  handleRemove,
}) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>S.No</th>
          <th>FName</th>
          <th>LName</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Nationality</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todoItems.map((item) => {
          const C = CompoentObj[isEdit];
          return (
            <tr key={item.sNo}>
              <C
                item={item}
                handleChange={({ target }) =>
                  handleChange({ target, rowObj: item })
                }
              />
              <td onClick={() => handleRemove(item)}>X</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default memo(TodoItemList)