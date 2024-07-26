import { Dropdown } from "../Dropdown/Dropdown";

const DropDown = () => {
  const handleSelect = (selectedItem: string) => {
    console.log("Selected item:", selectedItem);
  };

  const DropDownItems = [
    ["Item 1", "Item 2", "Item 3"],
    ["Item 4", "10", "Item 6"],
  ];

  return (
    <div className="app">
      <h1>Vendor Name</h1>
      <Dropdown
        label="Select an option"
        items={DropDownItems}
        defaultSelect="Select"
        onSelect={handleSelect}
      />
    </div>
  );
};

export default DropDown;
