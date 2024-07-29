import React, { useState, ChangeEvent } from "react";
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
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSelect = (item: string) => {
    setSelected(item);
    onSelect(item);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items
    .flat()
    .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="dropdown">
      <button className="dropdown-label" onClick={toggleDropdown}>
        {selected || label}{" "}
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <input
            type="text"
            placeholder="Search..."
            className="dropdown-search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {filteredItems.length ? (
            <div className="dropdown-group">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className={`dropdown-item ${item === selected ? "selected" : ""}`}
                  onClick={() => handleSelect(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <div className="dropdown-no-results">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};
