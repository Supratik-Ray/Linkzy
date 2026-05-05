import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectToDb } from "./config/db.ts";

//routes
import authRoutes from "./routes/auth.routes.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello world" });
});

const port = process.env.PORT || 5000;

(async () => {
  await connectToDb(process.env.MONGODB_URL as string);
  app.listen(port, () => console.log(`server listening on port ${port}`));
})();
