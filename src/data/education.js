// Education and credentials, from hub/PORTFOLIO_CONTEXT.md section 7.
import { decisions } from "./site.config.js";

export const education = {
  school: "The University of Texas at Austin",
  degree: decisions.showMathMajor ? "B.S. Computer Science and Mathematics" : "B.S. Computer Science",
  standing: "Junior",
  gpa: "3.73",
  graduation: "May 2028",
  location: "Austin, TX",
  coursework: ["Data Structures and Algorithms", "Software Engineering", "Operating Systems (in progress)"],
};

// Credential URLs carried over from the old Education section.
export const certifications = [
  {
    id: "ibm-data-science",
    name: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    year: "2025",
    url: "https://coursera.org/share/aa10bd6e44770dcc55e23e6ccb5c765d",
  },
  {
    id: "microsoft-python",
    name: "Microsoft Python Development",
    issuer: "Microsoft",
    year: "2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/M1L7GEG8QAKO",
  },
];
