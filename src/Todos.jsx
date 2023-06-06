import Todo from "./Todo";

const Todos = (props) => {
  return (
    <section>
      <div className="">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3 border-solid border-2 border-sky-500 hover:border-dotted p-20">
          {props.todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Todos;
