import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const App = () => {
  const [csrfToken, setCsrfToken] = useState<string>("");
  const [hackSuccess, setHackSuccess] = useState<string>("");

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const response = await axios.get("http://localhost:3000/api/csrf-token", {
        withCredentials: true,
      });
      setCsrfToken(response.data.csrfToken);
    };

    fetchCsrfToken().then();
  }, []);

  const handleVulnerableSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/vulnerable-submit",
        {},
        {
          withCredentials: true,
        },
      );
      setHackSuccess(response.data.message);
    } catch (error) {
      console.error("Vulnerable submit failed", error);
    }
  };

  const handleSecureSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/submit",
        { csrfToken },
        { withCredentials: true },
      );
      alert("Secure submission made");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        alert("Secure submission failed: " + error.response?.data.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold">CSRF Vulnerability Demo</h1>
      <div>
        <h2 className="mb-2">CSRF Token:</h2>
        <p className="bg-gray-200 p-2 rounded">{csrfToken}</p>
      </div>
      <button
        onClick={handleSecureSubmit}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Try Secure Submission
      </button>
      <button
        onClick={handleVulnerableSubmit}
        className="bg-red-500 text-white p-2 rounded"
      >
        Exploit Vulnerable Endpoint
      </button>
      {hackSuccess && <p className="text-green-500 mt-4">{hackSuccess}</p>}
    </div>
  );
};

export default App;
