import "./Scholarships.css";

const scholarships = [
  {
    title: "Merit Excellence Award",
    description:
      "Awarded to students who demonstrate outstanding academic achievement and leadership qualities.",
    amount: "$5,000",
    deadline: "2026-04-15",
    category: "Merit-Based",
    eligibility: "GPA 3.5+, Full-time student",
  },
  {
    title: "STEM Innovation Scholarship",
    description:
      "Supporting students pursuing degrees in Science, Technology, Engineering, and Mathematics.",
    amount: "$8,000",
    deadline: "2026-05-01",
    category: "STEM",
    eligibility: "STEM major, Sophomore+",
  },
  {
    title: "Community Service Grant",
    description:
      "For students who have shown exceptional dedication to community service and volunteerism.",
    amount: "$3,000",
    deadline: "2026-03-30",
    category: "Service",
    eligibility: "100+ volunteer hours",
  },
  {
    title: "Arts & Humanities Fellowship",
    description:
      "Supporting talented students in arts, literature, history, and humanities disciplines.",
    amount: "$4,500",
    deadline: "2026-06-15",
    category: "Arts",
    eligibility: "Arts/Humanities major",
  },
];

const Scholarships = () => {
  return (
    <div className="scholarships-page">
      <h1>Browse Scholarships</h1>
      <p className="subtitle">
        Find and apply for financial aid opportunities
      </p>

      <input
        type="text"
        placeholder="Search by title or category..."
        className="search"
      />

      <div className="grid">
        {scholarships.map((s, i) => (
          <div key={i} className="card">
            <h3>{s.title}</h3>
            <p className="desc">{s.description}</p>

            <div className="meta">
              <span>{s.amount}</span>
              <span>{s.deadline}</span>
              <span>{s.category}</span>
            </div>

            <p className="eligibility">
              <strong>Eligibility:</strong> {s.eligibility}
            </p>

            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;