import { useEffect, useState } from "react";
import axios from "axios";

const MemeFetcher = () => {
  const [meme, setMeme] = useState<{ title: string; url: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMeme = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/meme", {
        params: { url: "https://meme-api.com/gimme" },
      });
      setMeme(response.data);
    } catch (error) {
      console.error("Error fetching the meme:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeme().then();
  }, []);

  return (
    <div className="max-w-md mx-auto my-10 p-5 border rounded-lg shadow-lg bg-white">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : meme ? (
        <>
          <h2 className="text-xl font-bold mb-4">{meme.title}</h2>
          <img
            src={meme.url}
            alt={meme.title}
            className="w-full h-auto mb-4 rounded"
          />
          <button
            onClick={fetchMeme}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
          >
            Get Another Meme
          </button>
        </>
      ) : (
        <p className="text-center text-red-500">
          Failed to fetch meme. Please try again.
        </p>
      )}
    </div>
  );
};

export default MemeFetcher;
