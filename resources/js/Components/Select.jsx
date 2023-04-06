import React from 'react';

const Select = ({ label, options, ...rest }) => {
  return (
    <div className="mb-4">
      <label htmlFor={rest.name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <select
        {...rest}
        className="select1"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
