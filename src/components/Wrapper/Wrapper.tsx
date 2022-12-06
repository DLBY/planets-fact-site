import React from 'react';

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-dark min-h-screen relative text-white overflow-hidden before:absolute before: before:content-stars">
      {children}
    </div>
  );
};
