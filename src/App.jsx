import "./App.css";
import { useState } from "react";
import SplitPane from "./components/SplitPane";

const App = () => {
  return (
    <SplitPane
      left={
        <div>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
          </ul>
        </div>
      }
      right={<Copyright label="Robin" />}
    />
  );
};

const Copyright = ({ label }) => <div>Copyright by: {label}</div>;

export default App;
