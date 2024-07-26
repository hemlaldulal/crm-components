import { Button } from "./components/Button/Button";

const App = () => {
  return (
    <div>
      <Button
        size="large"
        label="Primary Default"
        type="primary"
        flavor="default"
        customStyles={{ borderRadius: "8px", padding: "12px 24px" }}
      />
      <Button
        size="large"
        label="Secondary Default"
        type="secondary"
        flavor="default"
        customStyles={{ borderColor: "#00F", borderWidth: "2px" }}
      />
      <Button
        size="medium"
        label="Primary Hover"
        type="primary"
        flavor="hover"
        customStyles={{ border: "1px solid #0B6ABE" }}
      />
      <Button
        size="large"
        label="Button"
        type="secondary"
        flavor="disabled"
        customStyles={{ opacity: 0.5, cursor: "not-allowed" }}
      />
      <Button
        size="large"
        label="+ Button"
        type="primary"
        flavor="disabledIcon"
        customStyles={{ marginTop: "10px" }}
      />
    </div>
  );
};

export default App;
