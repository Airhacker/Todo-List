import Head from "next/head";
import TodoList from "../components/TodoList";
import Time from "../components/Time";
import { GiPlainCircle } from "react-icons/gi";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Home() {
  const [background, setBackground] = useState(true);

  const changeBackgorundColor = () => {
    setBackground(!background);
  };

  return (
    <>
      <Head>
        <title>To do List</title>
        <meta name="description" content="The Best To Do List Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className={`w-screen h-screen ${background ? "bg-dark" : "bg-light"}`}
      >
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col content-center justify-start">
            <h1
              className={`py-4 text-xl font-bold ${
                background ? "text-white" : "text-black"
              }`}
            >
              Todo List
            </h1>

            <div className="flex content-center justify-start gap-4">
              <label htmlFor="backgroundButton">
                {background ? (
                  <BsMoonStarsFill className="text-lg text-white" />
                ) : (
                  <BsFillSunFill className="text-lg text-black" />
                )}
              </label>
              <button
                name="backgroundButton"
                onClick={changeBackgorundColor}
                className={`flex content-center p-0.5 w-10 rounded-full ${
                  background
                    ? "text-black bg-white justify-start"
                    : "text-white bg-black justify-end"
                }`}
              >
                <GiPlainCircle></GiPlainCircle>
              </button>
            </div>

            <Time background={background} />
          </div>

          <TodoList background={background} />
        </div>
      </section>
    </>
  );
}
