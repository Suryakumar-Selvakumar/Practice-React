import { useEffect, useState } from "react";
import { postRequestWithFetch } from "./postRequestWithFetch";

const FetchPostRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const postsData = await postRequestWithFetch({
          userId: 11,
          id: 101,
          title: "New post title",
          body: "The post body content",
        });
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
      <h2>Post Request with Fetch</h2>
      {loading && <div>Loading posts...</div>}
      {error && <div>{error}</div>}

      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <span>Post ID: {data.id}</span>
        </div>
      )}
    </div>
  );
};

export default FetchPostRequest;
