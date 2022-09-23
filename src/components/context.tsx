import { createContext, useContext, useState } from "react";

export type StateInfo = { id: string; val: string; name: string };
type updatingFunc = (guess: string) => void;

function tempUpdate(guess: string) {}

export const useGuesses = () => {
  return useContext(GuessesContext);
};
export const useGuessesUpdate = () => {
  return useContext(GuessesUpdateContext);
};

const GuessesContext = createContext([] as string[]);
const GuessesUpdateContext = createContext(tempUpdate as updatingFunc);

export const GuessesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [guesses, setGuesses] = useState([] as string[]);

  const addGuess = (guess: string) => {
    setGuesses((prev) => [...prev, guess]);
  };

  return (
    <GuessesContext.Provider value={guesses}>
      <GuessesUpdateContext.Provider value={addGuess}>
        {children}
      </GuessesUpdateContext.Provider>
    </GuessesContext.Provider>
  );
};

export default GuessesContext;
