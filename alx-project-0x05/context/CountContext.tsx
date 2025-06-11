import { createContext, useContext, useState, ReactNode } from "react";

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CountContext = createContext<CountContextProps | undefined>(
  undefined
);

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);
};
