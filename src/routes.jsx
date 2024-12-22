import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Tasks from "./Tasks";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name?",
    element: <Profile />,
  },
  {
    path: "tasks/:task?",
    element: <Tasks />,
  },
];

export default routes;
