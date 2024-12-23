import { useParams } from "react-router-dom";
import { getRequestWithNativeFetch } from "./getRequestWithNativeFetch";
import { useEffect, useState } from "react";

export default function Post() {
  const { postId } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchSinglePost = async () => {
      try {
        const postData = await getRequestWithNativeFetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
          controller.signal
        );
        setData(postData);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSinglePost();

    return () => controller.abort();
  }, [postId]);

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && <div>{error}</div>}

      <article>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
      </article>
    </>
  );
}
