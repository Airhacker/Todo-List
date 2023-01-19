import Head from "next/head";
import TodoList from "../components/TodoList";
import Time from "../components/Time";

export default function Home() {
  return (
    <>
      <Head>
        <title>To do List</title>
        <meta name="description" content="The Best To Do List Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-11/12 mx-auto">
        <div className="flex flex-col content-center justify-start">
          <h1 className="py-4 text-xl font-bold">Todo List</h1>
          <Time />
        </div>

        <TodoList />
      </section>
    </>
  );
}
