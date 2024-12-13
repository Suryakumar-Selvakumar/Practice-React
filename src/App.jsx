import "./App.css";
import { FunctionalInput } from "../components/FunctionalInput";
import ClassInput from "../components/ClassInput";
import Count from "../components/Count";

function App() {
  return (
    <>
      <FunctionalInput name="Functional component" />
      <div className="divider" />
      <ClassInput name="Class based component" />
    </>
  );
}

export default App;
