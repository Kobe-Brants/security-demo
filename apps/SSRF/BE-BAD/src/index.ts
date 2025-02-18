import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3002;

app.use(express.json());
app.use(cors());

app.get("/my-bad-endpoint", (req: Request, res: Response) => {
  console.log("Request received.");
  console.log(req.headers);

  res.json({
    title: "My Bad Endpoint",
    url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnF3NXd5anU3ZnNyenZ3cmM5ZmVhc2JmamZ3MzFtdjk1cXZ3dnJ3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DEQPn2GWwjYzUqABzl/giphy.gif",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
