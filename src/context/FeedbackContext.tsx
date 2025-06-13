import { createContext, useContext, useState } from "react";

export type FeedbackContextType = {
  good: number;
  neutral: number;
  bad: number;
  setGood: (value: number) => void;
  setNeutral: (value: number) => void;
  setBad: (value: number) => void;
};

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

function FeedbackProvider({ children }: { children: React.ReactNode }) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <FeedbackContext.Provider
      value={{ good, setGood, neutral, setNeutral, bad, setBad }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
export default FeedbackProvider;

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
}
