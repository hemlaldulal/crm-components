import { Dropdown } from "../Dropdown/Dropdown";

const DropDown = () => {
  const handleSelect = (selectedItem: string) => {
    console.log("Selected item:", selectedItem);
  };

  const DropDownItems = [
    ["Item 1", "Nepal", "Item 3"],
    ["Lalitpur", "10", "Kathmandu"],
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
