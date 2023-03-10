import React from "react";

export const TodoInput = ({ item, handleChange }) => (
  <>
    <td>
      <input type="text" value={item.sNo} disabled />
    </td>
    <td>
      <input
        type="text"
        name={"fName"}
        value={item.fName}
        onChange={handleChange}
      />
    </td>
    <td>
      <input
        type="text"
        name={"lName"}
        value={item.lName}
        onChange={handleChange}
      />
    </td>
  <td>
      <input
        type="text"
        name={"height"}
        value={item.height}
        onChange={handleChange}
      />
    </td>
    <td>
      <input
        type="text"
        name={"weight"}
        value={item.weight}
        onChange={handleChange}
      />
    </td>
    <td>
      <input
        type="text"
        name={"nationality"}
        value={item.nationality}
        onChange={handleChange}
      />
    </td>
  </>
);
