"use client";

import { useState } from "react";

type Assignment = {
  id: string;
  course: string;
  title: string;
  progress: number;
  detail: string;
};

type AssignmentFilter = "All" | "Not started" | "Pending" | "Completed";

const startingAssignments: Assignment[] = [
  {
    id: "a1",
    course: "CSC 201",
    title: "Linked-list exercise",
    progress: 70,
    detail: "Complete the linked-list practice questions.",
  },
  {
    id: "a2",
    course: "CSC 203",
    title: "Web page wireframe",
    progress: 50,
    detail: "Prepare a wireframe for the assigned web page.",
  },
  {
    id: "a3",
    course: "CSC 207",
    title: "Database normalization",
    progress: 20,
    detail: "Normalize the sample database tables.",
  },
  {
    id: "a4",
    course: "CSC 209",
    title: "User observation report",
    progress: 0,
    detail: "Write a short report based on a user observation.",
  },
  {
    id: "a5",
    course: "MAT 201",
    title: "Set theory practice",
    progress: 100,
    detail: "This assignment is complete.",
  },
  {
    id: "a6",
    course: "STA 201",
    title: "Probability exercises",
    progress: 35,
    detail: "Work through the probability questions.",
  },
];

const filters: AssignmentFilter[] = [
  "All",
  "Not started",
  "Pending",
  "Completed",
];

function getStatus(progress: number): Exclude<AssignmentFilter, "All"> {
  if (progress === 0) return "Not started";
  if (progress === 100) return "Completed";
  return "Pending";
}

export default function OverviewCards() {
  const [assignments, setAssignments] = useState(startingAssignments);
  const [filter, setFilter] = useState<AssignmentFilter>("All");
  const [openAssignmentId, setOpenAssignmentId] = useState<string | null>(null);

  const visibleAssignments = assignments.filter(
    (assignment) =>
      filter === "All" || getStatus(assignment.progress) === filter,
  );

  function updateProgress(assignmentId: string, progress: number) {
    setAssignments((currentAssignments) =>
      currentAssignments.map((assignment) =>
        assignment.id === assignmentId
          ? { ...assignment, progress }
          : assignment,
      ),
    );
  }

  const notStarted = assignments.filter(
    (assignment) => getStatus(assignment.progress) === "Not started",
  ).length;

  const pending = assignments.filter(
    (assignment) => getStatus(assignment.progress) === "Pending",
  ).length;

  const completed = assignments.filter(
    (assignment) => getStatus(assignment.progress) === "Completed",
  ).length;

  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">Assignments</h2>

      <p className="mb-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-600">
        <span>Total: {assignments.length}</span>
        <span>Not started: {notStarted}</span>
        <span>Pending: {pending}</span>
        <span>Completed: {completed}</span>
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((item) => {
          const count =
            item === "All"
              ? assignments.length
              : assignments.filter(
                  (assignment) => getStatus(assignment.progress) === item,
                ).length;

          return (
            <button
              key={item}
              type="button"
              onClick={() => {
                setFilter(item);
                setOpenAssignmentId(null);
              }}
              aria-pressed={filter === item}
              className={`rounded-full border px-3 py-1 text-sm ${
                filter === item
                  ? "border-indigo-700 bg-indigo-700 text-white"
                  : "border-slate-300 bg-white text-slate-700"
              }`}
            >
              {item} ({count})
            </button>
          );
        })}
      </div>

      <div className="space-y-2">
        {visibleAssignments.map((assignment) => {
          const isOpen = openAssignmentId === assignment.id;

          return (
            <article
              key={assignment.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpenAssignmentId(isOpen ? null : assignment.id)
                }
                className="grid w-full gap-2 p-4 text-left sm:grid-cols-[1fr_auto_auto] sm:items-center"
              >
                <span>
                  <strong className="block">{assignment.title}</strong>
                  <span className="text-xs text-slate-500">
                    {assignment.course}
                  </span>
                </span>

                <span className="text-sm text-slate-600">
                  {assignment.progress}% · {getStatus(assignment.progress)}
                </span>

                <span aria-hidden="true" className="text-indigo-700">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-600">{assignment.detail}</p>

                  <label className="mt-4 block text-sm font-medium">
                    Adjust progress: {assignment.progress}%
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="10"
                      value={assignment.progress}
                      onChange={(event) =>
                        updateProgress(
                          assignment.id,
                          Number(event.target.value),
                        )
                      }
                      className="mt-2 block w-full max-w-md accent-indigo-700"
                    />
                  </label>

                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      disabled={assignment.progress === 100}
                      onClick={() =>
                        updateProgress(
                          assignment.id,
                          Math.min(100, assignment.progress + 10),
                        )
                      }
                      className="rounded-lg border border-slate-300 px-3 py-2 text-sm disabled:opacity-50"
                    >
                      +10%
                    </button>

                    <button
                      type="button"
                      disabled={assignment.progress === 100}
                      onClick={() => updateProgress(assignment.id, 100)}
                      className="rounded-lg bg-indigo-700 px-3 py-2 text-sm text-white disabled:opacity-50"
                    >
                      {assignment.progress === 100
                        ? "Completed"
                        : "Mark complete"}
                    </button>
                  </div>
                </div>
              )}
            </article>
          );
        })}

        {visibleAssignments.length === 0 && (
          <p className="rounded-xl border border-slate-200 p-5 text-slate-600">
            No assignments in this group.
          </p>
        )}
      </div>
    </section>
  );
}
