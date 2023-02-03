import Head from "next/head";
import TodoList from "../components/TodoList";
import Time from "../components/Time";
import { GiPlainCircle } from "react-icons/gi";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
            <div className="flex content-center justify-between">
              <h1
                className={`py-4 text-xl font-bold ${
                  background ? "text-white" : "text-black"
                }`}
              >
                Todo List
              </h1>
              <div className="flex content-center justify-center gap-4 py-4">
                <motion.button
                  whileHover={{
                    scale: 1.25,
                    transition: { ease: "linear", duration: 0.01 },
                  }}
                  onClick={changeBackgorundColor}
                  htmlFor="backgroundButton"
                >
                  {background ? (
                    <BsMoonStarsFill className="text-xl text-white" />
                  ) : (
                    <BsFillSunFill className="text-xl text-black" />
                  )}
                </motion.button>
              </div>
            </div>

            <div>
              <Time background={background} />
            </div>
          </div>

          <TodoList background={background} />
        </div>
      </section>
    </>
  );
}
