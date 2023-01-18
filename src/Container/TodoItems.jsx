const TodoItems = ({ item }) => {
  return (
    <>
      <td>{item?.sNo}</td>
      <td>{item?.fName}</td>
      <td>{item?.lName}</td>
      <td>{item?.height}</td>
      <td>{item?.weight}</td>
      <td>{item?.nationality}</td>
    </>
  );
};
export default TodoItems;
