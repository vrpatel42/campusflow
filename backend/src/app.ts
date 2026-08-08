import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { taskRouter } from "./routes/taskRoutes";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok", service: "campusflow-api" });
});

app.use("/api/tasks", taskRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(
  (error: unknown, _req: Request, res: Response, _next: NextFunction) => {
    if (error instanceof ZodError) {
      return res.status(400).json({
        error: "Invalid request",
        details: error.flatten()
      });
    }

    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
);
