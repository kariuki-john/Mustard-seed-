import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            MUSTARD SEED INTERNATIONAL SCHOOLS
          </div>
          <p>
            Home of Quality, Fun and Care. 
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          {[
            ["Welcome", "/about-us/welcome"],
            ["Our School", "/our-school"],
            ["Admissions", "/admissions"],
            ["Gallery", "/gallery"],
          ].map(([name, to]) => (
            <Link key={to} to={to}>
              {name}
            </Link>
          ))}
        </div>
        <div>
          <h4>Useful Links</h4>
          {[
            ["School Fees", "/admissions/school-fees"],
            ["Calendar", "/our-school/calendar"],
            ["Job Board", "/our-school/job-board"],
            ["Policies", "/policies"],
          ].map(([name, to]) => (
            <Link key={to} to={to}>
              {name}
            </Link>
          ))}
        </div>
        <div>
          <h4>Get in touch</h4>
          <p>Kenya</p>
          <p>Contact +254721300121</p>
          <Link to="/contact-us">
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} Mustard Seed International School. All
        rights reserved.
      </div>
    </footer>
  );
}
