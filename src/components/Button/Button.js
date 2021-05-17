import React from "react";

export default function Button({ icon, text, handleFunction, provider }) {
  return (
    <>
      <button
        onClick={() => handleFunction(provider)}
        className="flex items-center justify-start font-medium focus:outline-none transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-md letter-tight mt-6 w-72 h-12 shadow-md"
      >
        {icon} Sign in with {text}
      </button>
    </>
  );
}
