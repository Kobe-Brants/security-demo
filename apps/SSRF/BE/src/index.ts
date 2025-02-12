import * as express from "express";
import axios from "axios";

const app = express();
const PORT = 3001;

app.use(express.json());

app.post("/api/ssrf", async (req: any, res: any) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send("URL is required");
  }

  try {
    // Make a request to the user-provided URL
    const response = await axios.get(url);
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send("Error fetching the URL");
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
