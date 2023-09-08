import React from "react";

export default function FAWBox({ answer, question }) {
  return (
    <>
      <div className="hover:bg-slate-800 p-4 rounded-sm m-auto w-10/12">
        <div className="my-2">
          <h1 className="text-white text-2xl font-bold">{question}</h1>
        </div>
        <div className="text-slate-500 text-xs">{answer}</div>
      </div>
    </>
  );
}
