import * as express from "express";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

let csrfToken = "";
let secretData = "This is a secret message.";

app.get("/api/csrf-token", (_: any, res: any) => {
  csrfToken = Math.random().toString(36).substring(2);
  res.cookie("csrfToken", csrfToken, { httpOnly: true });
  res.json({ csrfToken });
});

app.post("/api/submit", (req: any, res: any) => {
  const token = req.cookies.csrfToken;
  if (!token || token !== req.body.csrfToken) {
    return res.status(403).json({ message: "Invalid CSRF token" });
  }
  res.json({ message: "Data submitted successfully", secretData });
});

app.post("/api/vulnerable-submit", (_, res) => {
  res.json({ message: "Vulnerable endpoint reached!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
