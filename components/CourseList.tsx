type Course = {
  code: string;
  title: string;
};

const courses: Course[] = [
  { code: "CSC 201", title: "Data Structures" },
  { code: "CSC 203", title: "Web Development" },
  { code: "MAT 201", title: "Discrete Mathematics" },
];

export default function CourseList() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">My Courses</h2>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <li
            key={course.code}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <p className="text-sm font-semibold text-indigo-700">
              {course.code}
            </p>
            <p className="mt-1 font-medium">{course.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
