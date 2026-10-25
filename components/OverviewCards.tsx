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
      <h2 className="mb-4 text-xl font-semibold">Assignment Overview</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {assignments.map((assignment) => (
          <article
            key={assignment.label}
            className="rounded-xl border border-slate-200 bg-slate-50 p-5"
          >
            <p className="text-sm text-slate-600">{assignment.label}</p>
            <strong className="mt-2 block text-3xl font-bold text-indigo-700">
              {assignment.count}
            </strong>
          </article>
        ))}
      </div>
    </section>
  );
}
