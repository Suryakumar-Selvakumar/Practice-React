import { useParams } from "react-router-dom";
import Menial from "./Menial";
import Important from "./Important";
import DefaultTask from "./DefaultTask";

const Tasks = () => {
  const { task } = useParams();

  return (
    <div>
      <h1> Hello from tasks page!</h1>
      <p>How you doing?</p>
      <hr />
      {task === "menial" ? (
        <Menial />
      ) : task === "important" ? (
        <Important />
      ) : (
        <DefaultTask />
      )}
    </div>
  );
};

export default Tasks;
