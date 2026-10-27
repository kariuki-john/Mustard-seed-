import React from "react";
import { Link } from "react-router-dom";
export default function PageLayout({ title, children }) {
  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow light">
            MUSTARD SEED INTERNATIONAL SCHOOL
          </span>
          <h1>{title}</h1>
          <p>
            <Link to="/">Home</Link> / {title}
          </p>
        </div>
      </section>
      <main className="container inner-content">{children}</main>
    </>
  );
}
