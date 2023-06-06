import Image from "next/image";
const Todo = (props) => {
  console.log(props.todo);
  const { id, title, desc } = props.todo;
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3 border-solid border-2 border-sky-500 hover:border-dotted">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/images/foysal.png"
              alt="Modern building architecture"
              width={500}
              height={500}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {title}
            </a>
            <p className="mt-2 text-slate-500">{desc}</p>
            <div className="">
              <i className="fa fa-trash fa-2x m-2 cursor-pointer text-sky-400"></i>
              <i className="fa fa-edit fa-2x text-red-400 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
