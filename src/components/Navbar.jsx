
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import logo from "../images/download.png";
import "../../src/style.css";

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
  const [mobile, setMobile] = useState(false);
  const [expanded, setExpanded] = useState("");
  const location = useLocation();

  useEffect(() => {
    setMobile(false);
    setExpanded("");
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setMobile(false);
        setExpanded("");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mobile) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobile(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () =>
      document.removeEventListener("keydown", handleEscape);
  }, [mobile]);

  const toggleMenu = () => {
    setMobile((prev) => !prev);
    setExpanded("");
  };

  const toggleDropdown = (label) => {
    setExpanded((prev) => (prev === label ? "" : label));
  };

  return (
    <>
      {/* TOP CONTACT BAR */}
      <div className="topbar">
        <div className="container top-inner">
          <span className="top-welcome">
            Welcome to Mustard Seed International Schools
          </span>

          <div className="top-contacts">
            <a href="tel:+254721300121">
              <Phone size={13} />
              <span>+254 721 300 121</span>
            </a>

            <a href="mailto:info@mustardseedschools.co.ke">
              <Mail size={13} />
              <span>info@mustardseedschools.co.ke</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="header">
        <div className="container nav-inner">
          {/* SCHOOL BRAND */}
          <Link className="brand" to="/">
            <span className="brand-logo-wrapper">
              <img
                src={logo}
                className="brand-icon"
                alt="Mustard Seed International Schools logo"
              />
            </span>

            <span className="brand-name">
              MUSTARD SEED
              <small>INTERNATIONAL SCHOOLS</small>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {items.map((item) => (
              <div className="nav-item" key={item.label}>
                <NavLink
                  end={item.to === "/"}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive || (
                      item.to !== "/" &&
                      location.pathname.startsWith(item.to + "/")
                    )
                      ? "active"
                      : ""
                  }
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
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

          {/* RIGHT ACTIONS */}
          <div className="nav-actions">
            <Link
              className="apply-btn"
              to="/admissions/application"
            >
              <span>Apply Now</span>
              <ArrowRight size={16} />
            </Link>

            <button
              type="button"
              className="mobile-toggle"
              aria-label={mobile ? "Close navigation" : "Open navigation"}
              aria-expanded={mobile}
              aria-controls="mobile-navigation"
              onClick={toggleMenu}
            >
              {mobile ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>

        {/* MOBILE AND TABLET NAVIGATION */}
        {mobile && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            <div className="mobile-nav-content">
              {items.map((item) => (
                <div className="mobile-nav-group" key={item.label}>
                  <div className="mobile-item">
                    <NavLink
                      end={item.to === "/"}
                      to={item.to}
                      className={({ isActive }) =>
                        isActive || (
                          item.to !== "/" &&
                          location.pathname.startsWith(item.to + "/")
                        )
                          ? "active"
                          : ""
                      }
                    >
                      {item.label}
                    </NavLink>

                    {item.children && (
                      <button
                        type="button"
                        className={
                          expanded === item.label
                            ? "submenu-toggle expanded"
                            : "submenu-toggle"
                        }
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={expanded === item.label}
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <ChevronDown size={19} />
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

              <Link
                className="mobile-apply-btn"
                to="/admissions/application"
              >
                Apply for Admission
                <ArrowRight size={18} />
              </Link>

              <div className="mobile-contact">
                <a href="tel:+254721300121">
                  <Phone size={16} />
                  +254 721 300 121
                </a>
                <a href="mailto:info@mustardseedschools.co.ke">
                  <Mail size={16} />
                  info@mustardseedschools.co.ke
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
