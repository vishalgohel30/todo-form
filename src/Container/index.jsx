import React, { useCallback, useState } from "react";
import TodoItemList from "./TodoItemList";
import { TodoInput } from "./TodoInput";

const initialState = {
  sNo: 0,
  fName: "",
  lName: "",
  height: "",
  weight: "",
  nationality: "",
};

export default function Container() {
  const [todoItems, setTodoItems] = useState([]);
  const [addTodoItemObj, setAddTodoItem] = useState(initialState);
  const [isEdit, setIsEdit] = useState("todoText");
  const [isAdd, setIsAdd] = useState(false);

  const handleChange = useCallback(
    ({ target: { name, value }, rowObj, index, type = "" }) => {
      if (type === "add") {
        setAddTodoItem({ ...addTodoItemObj, [name]: value });
        return;
      }
      let match = todoItems[index]
      if (match) match[name] = value;
      setTodoItems([...todoItems]);
    },
    [todoItems, addTodoItemObj]
  );

  const handleSubmit = () => {
    setTodoItems((a) => [
      ...a,
      { ...addTodoItemObj, sNo: a[0] ? a[a.length - 1].sNo + 1 : 1 },
    ]);
    setIsAdd(false);
    setAddTodoItem(initialState);
  };

  const handleRemove = (rowObj) => {
    setTodoItems(todoItems.filter((a) => a.sNo !== rowObj.sNo));
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12 mb-2">
            <div style={{ float: "right" }}>
              <button
                className="btn btn-primary btn-lg "
                type="submit"
                disabled={isEdit === "inputTodo"}
                onClick={() => setIsAdd(true)}
              >
                Add Row
              </button>{" "}
              &nbsp; &nbsp;
              <button
                className="btn btn-primary btn-lg "
                type="submit"
                disabled={isAdd}
                onClick={() =>
                  setIsEdit((a) =>
                    a === "todoText" ? "inputTodo" : "todoText"
                  )
                }
              >
                Edit Rows
              </button>{" "}
              &nbsp; &nbsp;
              <button
                className="btn btn-primary btn-lg "
                type="submit"
                disabled={!isAdd}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          {isAdd && (
            <table className="table table-hover">
              <tbody>
                <tr>
                  <TodoInput
                    handleChange={({ target }) =>
                      handleChange({ target, type: "add" })
                    }
                    item={{
                      addTodoItemObj,
                      sNo: todoItems[0]
                        ? todoItems[todoItems.length - 1].sNo + 1
                        : 1,
                    }}
                  />
                </tr>
              </tbody>
            </table>
          )}
          <TodoItemList
            todoItems={todoItems}
            isEdit={isEdit}
            handleChange={handleChange}
            handleRemove={handleRemove}
          />
        </div>
      </div>
    </>
  );
}
