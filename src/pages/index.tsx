import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux";
import Header from "../components/header/Header";
import CreateTodo from "../components/createTodo/CreateTodo";
import Todo from "../components/todo/Todo";
import { TodoType } from "../types";
import { fetchTodos } from "../redux/asyncReducers";
import { useTheme } from "next-themes";
import Filter from "@/components/filter/Filter";

export default function Home() {
  const todosArray = useSelector((state: RootState) => state.data);
  const { theme, setTheme } = useTheme();
  const [filter, setFilter] = useState("all");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const newTodos = todosArray
    .filter((item: TodoType) => {
      if (filter === "all") return item;
      if (filter === "compleate" && item.status) return item;
      if (filter === "progress" && !item.status) return item;
    })
    .map((item: TodoType) => <Todo key={item.id} {...item} />);
  const compleatTodos = todosArray.reduce(
    (acc: number, item: TodoType) => acc + Number(item.status),
    0
  );
  return (
    <>
      <button
        className="block py-2 pl-3 pr-4 rounded md:p-0"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <div className="App">
        <Header todos={todosArray.length} compleatTodos={compleatTodos} />
        <div className="content">
          <CreateTodo />
          <Filter status={filter} setStatus={setFilter} />
          <div className="todosWrapper">{newTodos}</div>
        </div>
      </div>
    </>
  );
}
