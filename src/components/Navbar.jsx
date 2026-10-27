import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import logo from "../images/download.png";
const items = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about-us",
    children: [
      ["Welcome", "/about-us/welcome"],
      ["FAQs", "/about-us/faqs"],
    ],
  },
  {
    label: "Our School",
    to: "/our-school",
    children: [
      ["Early Years", "/our-school/early-years"],
      ["Junior School", "/our-school/junior-school"],
      ["Senior School", "/our-school/senior-school"],
      ["Flex Boarding", "/our-school/flex-boarding"],
      ["Transport", "/our-school/transport"],
      ["Calendar", "/our-school/calendar"],
      ["Job Board", "/our-school/job-board"],
    ],
  },
  {
    label: "Admissions",
    to: "/admissions",
    children: [
      ["School Fees", "/admissions/school-fees"],
      ["Student Application Form", "/admissions/application"],
    ],
  },
  { label: "Gallery", to: "/gallery" },
  { label: "News", to: "/news" },
  { label: "Contact Us", to: "/contact-us" },
  { label: "Policies", to: "/policies" },
];
export default function Navbar() {
  const [mobile, setMobile] = useState(false),
    [expanded, setExpanded] = useState("");
  const location = useLocation();
  React.useEffect(() => {
    setMobile(false);
    setExpanded("");
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <div className="topbar">
        <div className="container top-inner">
          <span>Welcome to Mustard Seed International Schools</span>
          <span className="top-separator">Contact Us: 254 721 300 121</span>
          <span>Email: info@mustardseedschools.co.ke</span>
        </div>
      </div>
      <header className="header">
        <div className="container nav-inner">
          <Link className="brand" to="/">
            <span className="h-10 w-10">
              <img src={logo} className="brand-icon" alt="Mustard Seed International Schools logo" />
            </span>
            <span className="brand-name">
              MUSTARD SEED<small>INTERNATIONAL SCHOOLS</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {items.map((item) => (
              <div className="nav-item" key={item.label}>
                <NavLink end={item.to === "/"} to={item.to}>
                  {item.label}
                  {item.children && <ChevronDown size={13} />}
                </NavLink>
                {item.children && (
                  <div className="dropdown">
                    {item.children.map(([label, to]) => (
                      <Link key={to} to={to}>
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Link className="apply-btn" to="/admissions/application">
            Apply Now <ArrowRight size={15} />
          </Link>
          <button
            className="mobile-toggle"
            aria-label="Toggle navigation"
            aria-expanded={mobile}
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
        {mobile && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {items.map((item) => (
              <div key={item.label}>
                <div className="mobile-item">
                  <Link to={item.to}>{item.label}</Link>
                  {item.children && (
                    <button
                      aria-label={"Expand " + item.label}
                      onClick={() =>
                        setExpanded(expanded === item.label ? "" : item.label)
                      }
                    >
                      <ChevronDown size={17} />
                    </button>
                  )}
                </div>
                {item.children && expanded === item.label && (
                  <div className="mobile-sub">
                    {item.children.map(([label, to]) => (
                      <Link key={to} to={to}>
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
