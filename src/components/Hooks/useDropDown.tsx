import * as React from "react";

function useDropdown(
  label: string,
  defaultState: string,
  options: string[]
): [string, () => JSX.Element, (newState: string) => void] {
  const [state, updateState] = React.useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
      <div>
          <label htmlFor={id}>{label}</label>
      
      <select
        id={id}
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
        disabled={!options.length}
      >
        <option />
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      </div>
    
 
  );
  return [state, Dropdown, updateState];
}

export default useDropdown;
