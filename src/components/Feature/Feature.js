import React from "react";
import Icons from "./icons/icon";

export default function Feature({title,des}) {
  return (
    <div className="flex flex-col items-start">
      <span className="flex items-center text-md text-sFont">
        {Icons.Check} {title}
      </span>
      <p className="text-vs mt-1 text-sFont">
        {des}
      </p>
    </div>
  );
}
