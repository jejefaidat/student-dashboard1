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
      <h2>My Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.code}>
            {course.code} — {course.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
