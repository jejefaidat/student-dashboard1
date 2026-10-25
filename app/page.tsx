export default function Home() {
  return (
    <main>
      <header>
        <h1>Student Dashboard</h1>
        <p>Welcome back!</p>
      </header>

      <section>
        <h2>Student Profile</h2>
        <p>Name: Ada Okafor</p>
        <p>Matric Number: STU/2024/001</p>
        <p>Department: Computer Science</p>
      </section>

      <section>
        <h2>Assignment Overview</h2>
        <p>Total assignments: 12</p>
        <p>Pending assignments: 4</p>
        <p>Completed assignments: 8</p>
      </section>

      <section>
        <h2>My Courses</h2>
        <ul>
          <li>CSC 201 — Data Structures</li>
          <li>CSC 203 — Web Development</li>
          <li>MAT 201 — Discrete Mathematics</li>
        </ul>
      </section>
    </main>
  );
}
