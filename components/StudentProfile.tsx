type StudentProfileProps = {
  name: string;
  matricNumber: string;
  department: string;
};

export default function StudentProfile({
  name,
  matricNumber,
  department,
}: StudentProfileProps) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Student Profile</h2>

      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-sm text-slate-500">Name</dt>
          <dd className="mt-1 font-medium">{name}</dd>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-sm text-slate-500">Matric Number</dt>
          <dd className="mt-1 font-medium">{matricNumber}</dd>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-sm text-slate-500">Department</dt>
          <dd className="mt-1 font-medium">{department}</dd>
        </div>
      </dl>
    </section>
  );
}
