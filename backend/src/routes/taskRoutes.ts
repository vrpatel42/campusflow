import { Router } from "express";
import { createTask, listTasks } from "../controllers/taskController";

export const taskRouter = Router();

taskRouter.get("/", listTasks);
taskRouter.post("/", createTask);
