/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */

import {CustomSelectProps} from "../../interfaces/index"




function CustomSelect({ id, value, onChange, options, label, icon }: CustomSelectProps) {
    return (
        <div className="flex items-center space-x-2">
            {icon}
            {label && <label htmlFor={id} className="text-sm font-medium text-gray-600 whitespace-nowrap">{label}</label>}
            <select
                id={id}
                value={value}
                onChange={onChange}
                className="block w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
                {options.map((option) => (
                    <option key={option} value={option}>{typeof option === 'number' ? `${option} per page` : option}</option>
                ))}
            </select>
        </div>
    );
}


export default CustomSelect;