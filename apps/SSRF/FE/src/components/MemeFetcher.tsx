import { useEffect, useState } from "react";
import axios from "axios";
import { useUrlContext } from "../contexts/UrlContext.tsx";

const MemeFetcher = () => {
  const { urls } = useUrlContext();
  const [selectedUrl, setSelectedUrl] = useState<string>(urls[0] || "");
  const [meme, setMeme] = useState<{ title: string; url: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMeme = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/meme", {
        params: { url: selectedUrl || "https://meme-api.com/gimme" },
      });
      setMeme(response.data);
    } catch (error) {
      console.error("Error fetching the meme:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (urls.length > 0) {
      fetchMeme().then();
    }
  }, [selectedUrl, urls]);

  return (
    <div className="max-w-md mx-auto my-10 p-5 rounded-lg shadow-lg bg-white bg-opacity-30 backdrop-blur-md border border-white border-opacity-50">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <div className="mb-4">
            <select
              value={selectedUrl}
              onChange={(e) => setSelectedUrl(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              {urls.map((url, index) => (
                <option key={index} value={url}>
                  {url}
                </option>
              ))}
            </select>
          </div>
          {meme ? (
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
        </>
      )}
    </div>
  );
};

export default MemeFetcher;
