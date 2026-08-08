import type { Task } from "./types";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

export async function getTasks(): Promise<Task[]> {
  const response = await fetch(`${API_URL}/tasks`);

  if (!response.ok) {
    throw new Error("Unable to load tasks");
  }

  const payload: { data: Task[] } = await response.json();
  return payload.data;
}
