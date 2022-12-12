import React from 'react';

export default function Select({
  options, defaultValue, value, onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {options.map((option) => (
            <option key={option.name} value={option.value}>
                {option.name}
            </option>
        ))}
    </select>
  );
}