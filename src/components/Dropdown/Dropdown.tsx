import React, { useState } from "react";
import "./dropdown.css";

export type DropdownItem = string;

export interface DropdownProps {
  label: string;
  items: DropdownItem[][];
  defaultSelect?: string;
  onSelect: (selectedItem: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  defaultSelect,
  onSelect,
}) => {
  const [selected, setSelected] = useState<string | undefined>(defaultSelect);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (item: string) => {
    setSelected(item);
    onSelect(item);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown-label" onClick={toggleDropdown}>
        {selected || label}{" "}
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((group, index) => (
            <div key={index} className="dropdown-group">
              {group.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`dropdown-item ${item === selected ? "selected" : ""}`}
                  onClick={() => handleSelect(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
