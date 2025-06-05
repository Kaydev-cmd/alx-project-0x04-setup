import React from "react";

interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

const Button = ({
  buttonLabel,
  buttonSize,
  buttonBackgroundColor,
  action,
}: ButtonProps) => {
  const backgroundColorClass = buttonBackgroundColor
    ? {
        red: "bg-red-500",
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        green: "bg-green-500",
      }[buttonBackgroundColor]
    : "bg-slate-500";
};
