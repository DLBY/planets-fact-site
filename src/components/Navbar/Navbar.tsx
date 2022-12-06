import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-dark p-4">
      <div className="flex items-center">
        <img
          className="w-10 h-10 mr-2"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
        />
        <span className="font-semibold text-xl tracking-tight">Workflow</span>
      </div>
      <div className="flex">
        <a
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
          href="#"
        >
          Download
        </a>
      </div>
    </nav>
  );
};
