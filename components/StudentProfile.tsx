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
      <h2>Student Profile</h2>
      <p>Name: {name}</p>
      <p>Matric Number: {matricNumber}</p>
      <p>Department: {department}</p>
    </section>
  );
}
