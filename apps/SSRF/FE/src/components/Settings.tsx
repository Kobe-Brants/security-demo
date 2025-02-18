import React, { useState } from "react";
import { useUrlContext } from "../contexts/UrlContext.tsx";

const Settings = () => {
  const { urls, addUrl, removeUrl } = useUrlContext();
  const [newUrl, setNewUrl] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedUrls = [...urls];
      updatedUrls[editIndex] = newUrl;
      removeUrl(urls[editIndex]);
      addUrl(newUrl);
      setEditIndex(null);
    } else {
      addUrl(newUrl);
    }
    setNewUrl("");
  };

  const handleEditUrl = (index: number) => {
    setNewUrl(urls[index]);
    setEditIndex(index);
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-5 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Settings - Manage URLs</h2>
      <form onSubmit={handleAddUrl} className="flex flex-col mb-4">
        <input
          type="text"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          className="p-2 border rounded mb-2"
          placeholder="Enter URL"
          required
        />
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200">
          {editIndex !== null ? "Update URL" : "Add URL"}
        </button>
      </form>
      <ul className="list-disc pl-5">
        {urls.map((url, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{url}</span>
            <div>
              <button
                onClick={() => handleEditUrl(index)}
                className="text-blue-500 hover:underline mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => removeUrl(url)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
