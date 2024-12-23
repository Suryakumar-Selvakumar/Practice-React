import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getRequestWithNativeFetch } from "./getRequestWithNativeFetch";

const FetchGetRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const postsData = await getRequestWithNativeFetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=8"
        );
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);

  return (
    <div>
      <div>
        {loading && <div>Loading posts...</div>}
        {error && <div>{error}</div>}

        <ul>
          {data &&
            data.map(({ id, title }) => (
              <li key={id}>
                <NavLink to={`/posts/${id}`}>{title}</NavLink>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default FetchGetRequest;
