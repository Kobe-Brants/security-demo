import React, { useState } from "react";
import { $fetch } from "ofetch";

const App: React.FC = () => {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setResponse("");

    try {
      const res = await $fetch("/api/ssrf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { url },
      });

      setResponse(res); // Depending on the backend response, adjust this.
    } catch (err) {
      setError((err as any).message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-5">SSRF Demo Application</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2"
          placeholder="Enter URL"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {response && (
        <div className="mt-4">
          <h2 className="font-bold">Response:</h2>
          <pre className="bg-gray-200 p-2 rounded">{response}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
