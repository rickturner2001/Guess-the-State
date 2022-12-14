import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useGuesses, useGuessesUpdate } from "../components/context";
import StatesTable from "../components/StatesTable";
import UsMap from "../components/UsMap";
import allStates from "../data/allStates.json";
import { getFlagByID } from "../functions";

enum GuessState {
  INITIAL,
  CORRECT,
  WRONG,
  DUPLICATE,
}

type stateInfo = {
  id: string;
  name: string;
  val: string;
  majority: string;
  capital: string;
};

const Home: NextPage = () => {
  const currentInput = useRef<HTMLInputElement>(null);
  const guesses = useGuesses();
  const guessesUpdate = useGuessesUpdate();

  const [previousGuess, setPreviousGuess] = useState(GuessState.INITIAL);
  const [latestGuess, setLatestGuess] = useState({} as stateInfo);

  const parseNewInput = () => {
    const guessCheck = allStates.filter(
      (statesData) =>
        currentInput.current?.value.toLowerCase() ===
        statesData.name.toLowerCase()
    );

    if (guessCheck[0]) {
      if (!guesses.includes(guessCheck[0].val)) {
        setLatestGuess(guessCheck[0]);
        guessesUpdate(guessCheck[0].val);
        setPreviousGuess(GuessState.CORRECT);
      } else {
        setPreviousGuess(GuessState.DUPLICATE);
      }
    } else {
      setPreviousGuess(GuessState.WRONG);
    }
    if (currentInput.current) {
      currentInput.current.value = "";
    }
  };

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="dark:bg-gray-900 dark:text-gray-200 p-4">
        <header className="max-w-md mx-auto flex flex-col space-y-12 ">
          <h1 className="text-6xl font-bold text-center">Us States Quiz</h1>
          <div className="flex space-x-6  mx-auto">
            <button className="py-2 px-3 rounded-md border text-xl hover:bg-slate-100 shasow-md  transition-all dark:hover:bg-gray-800">
              States
            </button>
            <button className="py-2 px-3 rounded-md border text-xl hover:bg-slate-100 shasow-md  transition-all dark:hover:bg-gray-800">
              Cities
            </button>
          </div>
        </header>
        <section className="max-w-6xl flex flex-col space-y-12  mx-auto py-24">
          <div className="mx-auto flex  items-center justify-center space-x-4">
            <div className="flex">
              <input
                ref={currentInput}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    parseNewInput();
                  }
                }}
                type="text"
                className={`dark:text-gray-800 border-gray-300 rounded-tl-md rounded-bl-md border  w-max h-9 p-5  focus:outline-none shadow-sm focus:shadow-md transition-all ${
                  previousGuess === GuessState.CORRECT
                    ? "border-2 border-green-500"
                    : previousGuess === GuessState.WRONG
                    ? "border-2 border-red-500"
                    : previousGuess === GuessState.DUPLICATE
                    ? "border-2 border-yellow-500"
                    : ""
                }`}
              />

              <button
                onClick={() => parseNewInput()}
                className="py-2 px-3 bg-teal-500 shadow-sm rounded-tr-md rounded-br-md font-bold text-white active:scale-105 transition-transform"
              >
                Confirm
              </button>
            </div>
            <a
              href="#scoreboard"
              className=" hidden md:block py-2 px-3 bg-cyan-500 shadow-sm rounded-md font-bold text-white active:scale-105 transition-transform"
            >
              Scoreboard
            </a>
          </div>

          <div className="block md:flex md:flex-row md:space-x-24 md:items-center">
            <UsMap />
            {latestGuess?.id ? (
              <section className="md:w-[30rem] md:block mx-auto hidden p-4 border shadow-md">
                <div className="flex flex-col space-y-6">
                  <div className="max-w-[12rem] mx-auto mb-12">
                    <img
                      src={getFlagByID(latestGuess.id)?.src}
                      className="shadow-md"
                    />
                  </div>

                  <table className="mx-auto max-w-xl  text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6 font-bold">Name</td>
                        <td className="py-4 px-6">{latestGuess.name}</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6 font-bold">Abbreviation</td>
                        <td className="py-4 px-6">{latestGuess.id}</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6 font-bold">Capital</td>
                        <td className="py-4 px-6">{latestGuess.capital}</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6 font-bold">Majority</td>
                        <td className="py-4 px-6">
                          {latestGuess.majority === "blue"
                            ? "Democrats"
                            : "Republicans"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            ) : (
              <div className="md:w-[30rem] before:content-['']"></div>
            )}
          </div>
        </section>
        {latestGuess?.id ? (
          <section className="max-w-md mx-auto md:hidden p-4 border shadow-md">
            <div className="flex flex-col space-y-6">
              <div className="max-w-[12rem] mx-auto mb-12">
                <img
                  src={getFlagByID(latestGuess.id)?.src}
                  className="shadow-md"
                />
              </div>

              <table className="mx-auto max-w-xl text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6 font-bold">Name</td>
                    <td className="py-4 px-6">{latestGuess.name}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6 font-bold">Abbreviation</td>
                    <td className="py-4 px-6">{latestGuess.id}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6 font-bold">Capital</td>
                    <td className="py-4 px-6">{latestGuess.capital}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6 font-bold">Majority</td>
                    <td className="py-4 px-6">
                      {latestGuess.majority === "blue"
                        ? "Democrats"
                        : "Republicans"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          ""
        )}
        <section className="py-4 bg-gray-100 mt-24">
          <div className="max-w-lg mx-auto" id="scoreboard">
            <StatesTable guesses={guesses} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
