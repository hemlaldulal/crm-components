import { Button } from "./components/Button/Button";
import { TextArea } from "./components/TextArea/TextArea";
export const App = () => (
  <div>
    <Button
      type="primary"
      size="small"
      label="Primary Button"
      buttonType="submit"
      onClick={() => console.log("Primary Button clicked!")}
    />
    <TextArea type="success" size="large" placeholder="Success TextArea" />
    <Button
      type="success"
      size="medium"
      label="Success Button"
      buttonType="button"
      onClick={() => console.log("Success Button clicked!")}
    />
    <Button
      type="danger"
      size="small"
      label="Danger Button"
      buttonType="reset"
      onClick={() => console.log("Danger Button clicked!")}
    />
    <Button
      type="warning"
      size="medium"
      label="Warning Button"
      onClick={() => console.log("Warning Button clicked!")}
    />
    <Button
      type="info"
      size="large"
      label="Info Button"
      onClick={() => console.log("Info Button clicked!")}
    />
  </div>
);

export default App;
