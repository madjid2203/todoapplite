const Todos = ({ todos }) => {
  let todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="">
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p>There are no todo left! yay</p>
  );

  return <div>{todosList}</div>;
};

export default Todos;
