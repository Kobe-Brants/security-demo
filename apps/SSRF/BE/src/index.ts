import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get("/api/meme", async (req: Request, res: Response) => {
  const { url } = req.query;

  if (!url) {
    res.status(400).send("URL is required.");
  }

  const randomKey = Math.random().toString(36).substring(2, 15);

  try {
    const response = await axios.get(url as string, {
      headers: { "X-Random-Key": randomKey },
    });
    const content = response.data;

    res.json(content);
  } catch (error) {
    res.status(500).send("Error fetching or processing URL.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
