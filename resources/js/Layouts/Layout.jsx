import Header from '@/Components/Header';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="px-4 py-8 bg-gray-100">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
