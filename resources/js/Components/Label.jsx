import React from 'react';

export default function Label({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block font-medium text-gray-800 mb-1 ${className}`}>
            {value ? value : children}
        </label>
    );
}
