import React from "react";

export default function PageHeader({ pagename }) {
  return (
    <>
      <div className="p-40 bg-slate-800 px-10 text-center">
        <h1 className="text-white text-4xl font-bold">
          Welcome to {pagename} page
        </h1>
      </div>
    </>
  );
}
