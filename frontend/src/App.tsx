import { useEffect, useState } from "react";
import { getTasks } from "./api";
import type { Task } from "./types";

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTasks()
      .then(setTasks)
      .catch((cause: unknown) => {
        setError(cause instanceof Error ? cause.message : "Unexpected error");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">STUDENT PRODUCTIVITY</p>
        <h1>CampusFlow</h1>
        <p>Plan important work, stay focused, and finish assignments on time.</p>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <h2>My tasks</h2>
          <span>{tasks.length} total</span>
        </div>

        {loading && <p>Loading tasks…</p>}
        {error && <p role="alert">{error}</p>}
        {!loading && !error && tasks.length === 0 && (
          <p>No tasks yet. Create the first task through the API.</p>
        )}

        <div className="taskList">
          {tasks.map((task) => (
            <article className="taskCard" key={task.id}>
              <div>
                <h3>{task.title}</h3>
                {task.description && <p>{task.description}</p>}
              </div>
              <div className="meta">
                <span>{task.priority}</span>
                <span>{task.status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
