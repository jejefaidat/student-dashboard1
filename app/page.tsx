"use client";

import { useState } from "react";
import StudentProfile from "../components/StudentProfile";
import OverviewCards from "../components/OverviewCards";
import CourseList from "../components/CourseList";

type Section = "Overview" | "Profile" | "Courses" | "Assignments";

const sections: Section[] = ["Overview", "Profile", "Courses", "Assignments"];

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const summaryCards = [
    { label: "Total assignments", value: "12" },
    { label: "Pending assignments", value: "4" },
    { label: "Completed assignments", value: "8" },
    { label: "My courses", value: "10" },
  ];

  return (
    <main className="flex min-h-screen bg-slate-100 text-slate-900">
      <aside
        className={`shrink-0 bg-indigo-950 p-3 text-white ${
          sidebarOpen ? "w-56" : "w-16"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          {sidebarOpen && (
            <span className="font-semibold">Student dashboard</span>
          )}

          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            aria-expanded={sidebarOpen}
            className="rounded-lg px-3 py-2 hover:bg-indigo-900"
          >
            {sidebarOpen ? "←" : "→"}
          </button>
        </div>

        <nav aria-label="Main navigation" className="space-y-2">
          {sections.map((section) => (
            <button
              key={section}
              type="button"
              onClick={() => setActiveSection(section)}
              title={sidebarOpen ? undefined : section}
              aria-current={activeSection === section ? "page" : undefined}
              className={`w-full rounded-lg px-3 py-3 text-left ${
                activeSection === section
                  ? "bg-indigo-700"
                  : "hover:bg-indigo-900"
              }`}
            >
              {sidebarOpen ? section : section[0]}
            </button>
          ))}
        </nav>
      </aside>

      <section className="min-w-0 flex-1 p-4 sm:p-8">
        <h1 className="mb-6 text-2xl font-bold">{activeSection}</h1>

        {activeSection === "Overview" && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-gradient-to-r from-indigo-700 to-violet-700 p-6 text-white shadow-sm sm:p-8">
              <p className="text-sm font-medium text-indigo-100">
                YOUR STUDENT DASHBOARD
              </p>
              <h2 className="mt-2 text-3xl font-bold">Welcome back, Ada!</h2>
              <p className="mt-3 max-w-2xl text-indigo-100">
                Keep your student profile, course progress, and assignments
                together in one place. Choose a section to see more.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveSection("Courses")}
                  className="rounded-lg bg-white px-4 py-2 font-medium text-indigo-800 hover:bg-indigo-50"
                >
                  View courses
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSection("Assignments")}
                  className="rounded-lg border border-indigo-200 px-4 py-2 font-medium text-white hover:bg-indigo-600"
                >
                  View assignments
                </button>
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold">Your snapshot</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {summaryCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl bg-white p-5 shadow-sm"
                  >
                    <p className="text-sm text-slate-500">{card.label}</p>
                    <p className="mt-2 text-3xl font-bold text-indigo-700">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="font-semibold">About this project</h2>
              <p className="mt-2 text-slate-600">
                This student dashboard is a simple place to view your profile,
                check your courses, and keep track of assignment progress.
              </p>
            </div>
          </div>
        )}

        {activeSection === "Profile" && (
          <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-6">
            <StudentProfile
              name="Ada Okafor"
              matricNumber="STU/2024/001"
              department="Computer Science"
            />
          </div>
        )}

        {activeSection === "Courses" && (
          <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-6">
            <CourseList />
          </div>
        )}

        {activeSection === "Assignments" && (
          <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-6">
            <OverviewCards />
          </div>
        )}
      </section>
    </main>
  );
}
