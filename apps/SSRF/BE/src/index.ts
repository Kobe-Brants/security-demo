import * as express from "express";
import axios from "axios";
import * as cors from "cors";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get("/api/meme", async (req: any, res: any) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("URL is required.");
  }

  const randomKey = Math.random().toString(36).substring(2, 15);

  try {
    const response = await axios.get(url, {
      headers: { "X-Random-Key": randomKey },
    });
    const content = response.data;

    res.json(content);
  } catch (error) {
    return res.status(500).send("Error fetching or processing URL.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
