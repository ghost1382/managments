import React from 'react';

export default function({onClick, children, isActive}) {
	let className = 'border-2 border-blue-500 px-4 py-2 rounded';

	if (isActive) {
		className += ' bg-blue-500 text-white';
	} else {
		className += ' bg-red';
	}

	return (
		<button className={className} onClick={onClick}>{children}</button>
	)
}