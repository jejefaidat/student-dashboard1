import StudentProfile from "../components/StudentProfile";
import OverviewCards from "../components/OverviewCards";
import CourseList from "../components/CourseList";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-2xl bg-indigo-700 p-8 text-white shadow">
          <p className="text-sm font-medium text-indigo-200">STUDENT PORTAL</p>
          <h1 className="mt-2 text-3xl font-bold">Student Dashboard</h1>
          <p className="mt-2 text-indigo-100">Welcome back, Ada!</p>
        </header>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <StudentProfile
            name="Ada Okafor"
            matricNumber="STU/2024/001"
            department="Computer Science"
          />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <OverviewCards />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <CourseList />
        </div>
      </div>
    </main>
  );
}
