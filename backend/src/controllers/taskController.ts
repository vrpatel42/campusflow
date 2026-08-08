import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";

const createTaskSchema = z.object({
  title: z.string().trim().min(1).max(120),
  description: z.string().trim().max(1000).optional(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]).default("MEDIUM"),
  dueDate: z.string().datetime().optional()
});

export async function listTasks(_req: Request, res: Response) {
  const tasks = await prisma.task.findMany({
    orderBy: [{ status: "asc" }, { dueDate: "asc" }, { createdAt: "desc" }]
  });

  res.status(200).json({ data: tasks });
}

export async function createTask(req: Request, res: Response) {
  const input = createTaskSchema.parse(req.body);

  const task = await prisma.task.create({
    data: {
      title: input.title,
      description: input.description,
      priority: input.priority,
      dueDate: input.dueDate ? new Date(input.dueDate) : undefined
    }
  });

  res.status(201).json({ data: task });
}
