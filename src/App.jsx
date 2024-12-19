import "./App.css";
import PercentageStat from "./components/PercentageStat";

const App = () => {
  return (
    <div>
      <h1>Male Population</h1>
      <div>
        <PercentageStat label="Class 1" />
        <PercentageStat label="Class 2" />
        <PercentageStat label="Class 3" />
        <PercentageStat label="Class 4" />
      </div>
    </div>
  );
};

export default App;
