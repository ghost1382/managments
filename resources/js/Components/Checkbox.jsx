import React from 'react';

export default function Checkbox({ name, value, handleChange }) {
    return (
        <div className="inline-block align-middle">
            <input
                type="checkbox"
                name={name}
                value={value}
                className="rounded text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => handleChange(e)}
            />
            <label htmlFor={name} className="ml-2 text-gray-700">
                {name} 
            </label>
        </div>
    );
}
