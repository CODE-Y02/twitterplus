import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript Express running!");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
