import React from 'react';

export default function({onClick, children, isActive}) {
	let className = 'btn border-2 border-yellow-700 px-4 py-2 rounded transition-transform duration-300 ease-in-out transform-gpu ';
  
	if (isActive) {
	  className += ' bg-yellow-700 text-white shadow-md hover:scale-105';
	} else {
	  className += ' bg-white hover:bg-yellow-100 hover:shadow-md';
	}
  
	return (
	  <button className={className} onClick={onClick}>{children}</button>
	)
  } 
