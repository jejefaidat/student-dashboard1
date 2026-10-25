type AssignmentCard = {
  label: string;
  count: number;
};

const assignments: AssignmentCard[] = [
  { label: "Total assignments", count: 12 },
  { label: "Pending assignments", count: 4 },
  { label: "Completed assignments", count: 8 },
];

export default function OverviewCards() {
  return (
    <section>
      <OverviewCards />

      <div>
        {assignments.map((assignment) => (
          <article key={assignment.label}>
            <p>{assignment.label}</p>
            <strong>{assignment.count}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
