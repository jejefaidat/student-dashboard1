"use client";

import { Fragment, useState } from "react";

type Course = {
  id: string;
  code: string;
  type: string;
  title: string;
  units: number;
  progress: number;
};

type CourseFilter = "All" | "Not started" | "Pending" | "Completed";

const startingCourses: Course[] = [
  {
    id: "csc201",
    code: "CSC 201",
    type: "Core",
    title: "Data Structures",
    units: 3,
    progress: 70,
  },
  {
    id: "csc203",
    code: "CSC 203",
    type: "Core",
    title: "Web Development",
    units: 3,
    progress: 80,
  },
  {
    id: "csc205",
    code: "CSC 205",
    type: "Core",
    title: "Algorithms",
    units: 3,
    progress: 20,
  },
  {
    id: "csc207",
    code: "CSC 207",
    type: "Core",
    title: "Database Systems",
    units: 3,
    progress: 45,
  },
  {
    id: "csc209",
    code: "CSC 209",
    type: "Elective",
    title: "Human-Computer Interaction",
    units: 2,
    progress: 0,
  },
  {
    id: "mat201",
    code: "MAT 201",
    type: "Core",
    title: "Discrete Mathematics",
    units: 3,
    progress: 35,
  },
  {
    id: "gst201",
    code: "GST 201",
    type: "General",
    title: "Communication Skills",
    units: 2,
    progress: 65,
  },
  {
    id: "sta201",
    code: "STA 201",
    type: "Core",
    title: "Probability and Statistics",
    units: 3,
    progress: 55,
  },
  {
    id: "csc211",
    code: "CSC 211",
    type: "Core",
    title: "Software Engineering",
    units: 3,
    progress: 100,
  },
  {
    id: "mth301",
    code: "MTH 301",
    type: "Elective",
    title: "Linear Algebra",
    units: 2,
    progress: 10,
  },
];

const filters: CourseFilter[] = ["All", "Not started", "Pending", "Completed"];

function getStatus(progress: number): Exclude<CourseFilter, "All"> {
  if (progress === 0) return "Not started";
  if (progress === 100) return "Completed";
  return "Pending";
}

export default function CourseList() {
  const [courses, setCourses] = useState(startingCourses);
  const [filter, setFilter] = useState<CourseFilter>("All");
  const [openCourseId, setOpenCourseId] = useState<string | null>(null);

  const visibleCourses = courses.filter(
    (course) => filter === "All" || getStatus(course.progress) === filter,
  );

  function updateProgress(courseId: string, progress: number) {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === courseId ? { ...course, progress } : course,
      ),
    );
  }

  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">My Courses</h2>
      <p className="mb-4 text-sm text-slate-600">
        Select a course to view and update its progress.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setFilter(item);
              setOpenCourseId(null);
            }}
            aria-pressed={filter === item}
            className={`rounded-full border px-3 py-1 text-sm ${
              filter === item
                ? "border-indigo-700 bg-indigo-700 text-white"
                : "border-slate-300 bg-white text-slate-700"
            }`}
          >
            {item}
            {item === "All"
              ? ` (${courses.length})`
              : ` (${courses.filter((course) => getStatus(course.progress) === item).length})`}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="p-3">Course code</th>
              <th className="p-3">Type</th>
              <th className="p-3">Course title</th>
              <th className="p-3">Units</th>
              <th className="p-3">Progress</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {visibleCourses.map((course) => (
              <Fragment key={course.id}>
                <tr className="border-t border-slate-200">
                  <td className="p-3">
                    <button
                      type="button"
                      aria-expanded={openCourseId === course.id}
                      onClick={() =>
                        setOpenCourseId(
                          openCourseId === course.id ? null : course.id,
                        )
                      }
                      className="font-semibold text-indigo-700 underline"
                    >
                      {course.code}
                    </button>
                  </td>
                  <td className="p-3">{course.type}</td>
                  <td className="p-3 font-medium">{course.title}</td>
                  <td className="p-3">{course.units}</td>
                  <td className="p-3">
                    <div
                      role="progressbar"
                      aria-label={`${course.title} progress`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={course.progress}
                      className="h-3 w-24 rounded-full border border-slate-300 bg-slate-100 p-0.5"
                    >
                      <div
                        className="h-full rounded-full bg-indigo-600"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-600">
                      {course.progress}%
                    </span>
                  </td>
                  <td className="p-3">{getStatus(course.progress)}</td>
                </tr>

                {openCourseId === course.id && (
                  <tr className="border-t border-slate-200 bg-indigo-50">
                    <td className="p-4" colSpan={6}>
                      <p className="font-semibold">{course.title}</p>
                      <p className="mt-1 text-sm text-slate-600">
                        {course.type} course · {course.units} units
                      </p>

                      <label className="mt-4 block text-sm font-medium">
                        Adjust course progress: {course.progress}%
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="10"
                          value={course.progress}
                          onChange={(event) =>
                            updateProgress(
                              course.id,
                              Number(event.target.value),
                            )
                          }
                          className="mt-2 block w-full max-w-md accent-indigo-700"
                        />
                      </label>

                      <button
                        type="button"
                        onClick={() => updateProgress(course.id, 100)}
                        disabled={course.progress === 100}
                        className="mt-3 rounded-lg bg-indigo-700 px-4 py-2 text-white disabled:opacity-50"
                      >
                        {course.progress === 100
                          ? "Completed"
                          : "Mark complete"}
                      </button>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}

            {visibleCourses.length === 0 && (
              <tr>
                <td className="p-5 text-slate-600" colSpan={6}>
                  No courses in this group.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
