
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Bus,
  ShieldCheck,
} from "lucide-react";

// Import images from src/images
import earlyYearsImage from "../images/Early years view.jpg";
import juniorSchoolImage from "../images/basketball 2.jpg";
import seniorSchoolImage from "../images/senior school view.jpg";
import aLevelImage from "../images/senior school1.jpg";

// School programs
const cards = [
  {
    title: "Early Years",
    to: "/our-school/early-years",
    subtitle: "Kindergarten | Ages 2 to 5 Years",
    description:
      "Our Early Years program is designed to provide a nurturing and stimulating environment for young children. We focus on developing their social, emotional, cognitive, and physical skills through play-based learning and hands-on experiences. Our experienced teachers create a safe and supportive atmosphere where children can explore, discover, and develop a love for learning. We also work closely with parents to ensure that each child's individual needs are met and that they receive the best possible start in their educational journey.",
    image: earlyYearsImage,
  },
  {
    title: "Junior School",
    to: "/our-school/junior-school",
    subtitle: "Key Stages 1 and 2 | Ages 5 to 11 Years",
    description:
      "We offer the British Curriculum right from Early Years. Our program is collaborative, developmentally appropriate and built on the tenets of teaching to the whole child. Our classroom environment is enriched by playful inquiry, as well as social and emotional support. This explains why the children in our Kindergarten grow to be inquisitive, reflective and critical thinkers.",
    image: juniorSchoolImage,
  },
  {
    title: "Senior School",
    to: "/our-school/senior-school",
    subtitle: "Cambridge IGCSE and A Level Preparation",
    description:
      "Learners at Senior School are prepared for the Cambridge IGCSE and A Level examinations. Our Senior School curriculum is designed to provide a broad and balanced education that prepares students for further education and employment. We offer a wide range of subjects, including English, Mathematics, Science, Humanities, Languages, and the Arts. Our experienced teachers use a variety of teaching methods to engage students and help them develop critical thinking, problem-solving, and communication skills. We also offer extracurricular activities, including sports, music, drama, and community service, to help students develop their interests and talents. Our goal is to provide a supportive and challenging learning environment that helps students achieve their full potential.",
    image: seniorSchoolImage,
  },
  {
    title: "A-Level",
    to: "/our-school/senior-school",
    subtitle: "Two-Year University Preparation Program",
    description:
      "The A-Level program is a two-year course of study that prepares students for university and beyond. Our A-Level curriculum is designed to provide students with a deep understanding of their chosen subjects, as well as the skills and knowledge needed to succeed in higher education and the workforce. We offer a wide range of subjects, including Mathematics, Sciences, Humanities, Languages, and the Arts. Our experienced teachers use a variety of teaching methods to engage students and help them develop critical thinking, problem-solving, and communication skills. We also offer extracurricular activities, including sports, music, drama, and community service, to help students develop their interests and talents. Our goal is to provide a supportive and challenging learning environment that helps students achieve their full potential.",
    image: aLevelImage,
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-shade" />

        <div className="container hero-content">
          <span className="eyebrow light">
            WELCOME TO MUSTARD SEED INTERNATIONAL SCHOOLS
          </span>

          <h1>Home of Quality, Fun and Care</h1>

          <p>
            Enlighten, Inspire and Empower the learner through a rich
            variety of activities in becoming a Holistic Individual
            prepared to face the challenges of the Dynamic Global Village.
          </p>

          <div className="hero-actions">
            <Link className="primary" to="/about-us/welcome">
              Discover Our School <ArrowRight size={17} />
            </Link>

            <Link className="outline" to="/admissions/application">
              Join Our Community
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="intro container">
        <div>
          <h2>
            First choice in provision of
            <br />
            <em>
              Quality, Secure and Result-Oriented Education
            </em>
          </h2>
        </div>

        <div>
          <p>
            We believe every child deserves a nurturing environment
            that brings out their unique strengths. Our approach
            blends academic excellence, character development and
            meaningful experiences.
          </p>

          <Link className="text-link" to="/about-us/welcome">
            Get to know us <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* ================= LEARNING PROGRAMS ================= */}
      <section className="w-full bg-gray-50 px-4 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>
              <span className="eyebrow">
                OUR LEARNING JOURNEY
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                Every stage, a new{" "}
                <em className="text-green-700">
                  possibility.
                </em>
              </h2>
            </div>

            <Link
              to="/our-school"
              className="inline-flex items-center gap-2 font-semibold text-green-700 transition hover:text-green-900"
            >
              Explore our school
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* 2 columns and 2 rows */}
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">

            {cards.map((card) => (
              <article
                key={card.title}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Card image */}
                <div className="h-60 w-full shrink-0 overflow-hidden md:h-64">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6 md:p-8">

                  {/* Title */}
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    {card.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-700">
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mb-6 flex-1 text-justify text-base leading-7 text-gray-600">
                    {card.description}
                  </p>

                  {/* Learn more link */}
                  <div className="mt-auto border-t border-gray-100 pt-5">
                    <Link
                      to={card.to}
                      className="inline-flex items-center gap-2 font-semibold text-green-700 transition-colors hover:text-green-900"
                    >
                      Learn more
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ================= ADMISSIONS CTA ================= */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow light">
              YOUR JOURNEY STARTS HERE
            </span>

            <h2>
              Ready to become part of
              <br />
              our school family?
            </h2>

            <p>
              Explore admissions and take the first step toward
              an inspiring education.
            </p>
          </div>

          <Link
            className="white-btn"
            to="/admissions/application"
          >
            Start Your Application
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ================= QUICK LINKS ================= */}
      <section className="quick container">

        <Link to="/our-school/calendar">
          <CalendarDays />
          School Calendar
          <ArrowRight />
        </Link>

        <Link to="/our-school/transport">
          <Bus />
          Transport Services
          <ArrowRight />
        </Link>

        <Link to="/policies">
          <ShieldCheck />
          School Policies
          <ArrowRight />
        </Link>

      </section>
    </>
  );
}
