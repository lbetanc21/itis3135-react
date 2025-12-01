// src/pages/Students.jsx
import { useEffect, useState } from "react";

const STUDENTS_URL =
  "https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Load all students once when the page shows up
  useEffect(() => {
    async function fetchStudents() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(STUDENTS_URL);
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }

        const data = await res.json();
        const list = Array.isArray(data) ? data : Object.values(data);

        setStudents(list);
      } catch (err) {
        console.error("Failed to load students:", err);
        setError("Could not load student data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, []);

  // Simple search by name or prefix (id)
  const filtered = students.filter((s) => {
    if (!search.trim()) return true;
    const term = search.toLowerCase();
    const prefix = (s.prefix || "").toLowerCase();
    const first = (s.name?.first || "").toLowerCase();
    const last = (s.name?.last || "").toLowerCase();
    const full = `${first} ${last}`.trim();
    return (
      prefix.includes(term) ||
      first.includes(term) ||
      last.includes(term) ||
      full.includes(term)
    );
  });

  return (
    <main className="students-page">
      <h2>ITIS 3135 Student Introductions</h2>
      <p className="students-note">
        Data loaded from <code>{STUDENTS_URL}</code>.
      </p>

      <div className="students-controls">
        <label>
          Search by name or NinerNET ID:
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="e.g. Luis, Betancourt, lbetanc2"
          />
        </label>
      </div>

      {loading && <p>Loading student data…</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <ul className="students-grid">
          {filtered.map((student) => (
            <li key={student.prefix} className="student-card">
              <h3>
                {student.name?.first} {student.name?.last}
              </h3>
              <p className="student-prefix">
                <strong>ID:</strong> {student.prefix}
              </p>

              {student.backgrounds?.personal && (
                <p>
                  <strong>Personal:</strong> {student.backgrounds.personal}
                </p>
              )}

              {student.backgrounds?.academic && (
                <p>
                  <strong>Academic:</strong> {student.backgrounds.academic}
                </p>
              )}

              {student.backgrounds?.subject && (
                <p>
                  <strong>Subject:</strong> {student.backgrounds.subject}
                </p>
              )}

              {student.links?.charlotte && (
                <p>
                  <a
                    href={student.links.charlotte}
                    target="_blank"
                    rel="noreferrer"
                  >
                    UNC Charlotte Webpage
                  </a>
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
