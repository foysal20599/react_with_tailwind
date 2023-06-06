"use client";
import Todos from "@/src/Todos";
import "font-awesome/css/font-awesome.min.css"

const dummyTodos = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet. id 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nostrum.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet. id 2",
    desc: "Lorem ipsum dolor sit amet ok consectetur adipisicing elit. Totam, nostrum.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Todos todos={dummyTodos} />
    </div>
  );
}
