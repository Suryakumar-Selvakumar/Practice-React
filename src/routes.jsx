import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Tasks from "./Tasks";
import { element } from "prop-types";
import Post from "./components/Post";
import FetchGetRequest from "./components/FetchGetRequest";

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
  {
    path: "posts",
    element: <FetchGetRequest />,
    children: [
      {
        path: ":postId",
        element: <Post />,
      },
    ],
  },
];

export default routes;
