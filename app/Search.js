import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { q } = router.query; // Get the query parameter

  return (
    <div className="container mt-4">
      <h1>Search Results</h1>
      {q ? (
        <p>
          No direct route found for: <strong>{q}</strong>
        </p>
      ) : (
        <p>No search query provided.</p>
      )}
    </div>
  );
};

export default Search;
