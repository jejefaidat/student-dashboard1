"use client";

import { useState } from "react";

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
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section>
      <h2 className="text-xl font-semibold">Student Profile</h2>
      <p className="mt-1 text-sm text-slate-600">
        Your personal and academic information.
      </p>

      <div className="mt-6 flex flex-col items-center gap-4 rounded-xl bg-slate-50 p-5 text-center sm:flex-row sm:text-left">
        <div className="grid size-24 shrink-0 place-items-center overflow-hidden rounded-full bg-indigo-100 text-2xl font-bold text-indigo-800">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={`${name}'s profile`}
              className="size-full object-cover"
            />
          ) : (
            initials
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="mt-1 text-sm text-slate-600">{department}</p>
          <p className="text-sm text-slate-600">{matricNumber}</p>

          <label className="mt-3 block text-sm font-medium text-indigo-700">
            Choose profile photo
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) {
                  setPhotoUrl(URL.createObjectURL(file));
                }
              }}
              className="mt-2 block max-w-full text-xs text-slate-600"
            />
          </label>
        </div>
      </div>

      <form
        className="mt-6"
        onSubmit={(event) => {
          event.preventDefault();
          setMessage("Email format looks valid.");
        }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            Phone number
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Enter phone number"
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>

          <label className="block text-sm font-medium">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter email address"
              required
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-4 rounded-lg bg-indigo-700 px-4 py-2 text-sm text-white"
        >
          Check details
        </button>

        <p aria-live="polite" className="mt-2 text-sm text-green-700">
          {message}
        </p>
      </form>

      <h3 className="mb-3 mt-7 font-semibold">Academic and personal details</h3>

      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-sm text-slate-500">Level</dt>
          <dd className="mt-1 font-medium">300 Level</dd>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-sm text-slate-500">Gender</dt>
          <dd className="mt-1 font-medium">Not added</dd>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-sm text-slate-500">Study program</dt>
          <dd className="mt-1 font-medium">B.Sc. Computer Science</dd>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <dt className="text-sm text-slate-500">Scholarship</dt>
          <dd className="mt-1 font-medium">Not added</dd>
        </div>
      </dl>
    </section>
  );
}
