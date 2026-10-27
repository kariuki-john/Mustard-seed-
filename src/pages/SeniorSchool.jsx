
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  HeartHandshake,
  Trophy,
  Target,
  Lightbulb,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Star,
  School,
  Award,
  Compass,
  Brain,
} from "lucide-react";

import PageLayout from "../components/PageLayout";

// Senior School Core Values
const schoolValues = [
  {
    title: "Character",
    description:
      "Developing and maturing individuals by helping learners discover their talents, skills and values, enabling them to make a positive impact beyond MSIS.",
    icon: HeartHandshake,
  },
  {
    title: "Operations",
    description:
      "Providing outstanding learning environments, infrastructure and school functions that distinguish the MSIS educational experience.",
    icon: School,
  },
  {
    title: "Opportunity",
    description:
      "Ensuring learners achieve their potential and expand their educational, personal and future career opportunities.",
    icon: Target,
  },
  {
    title: "Scholarship",
    description:
      "Encouraging intellectual curiosity, independent thought, academic excellence and effective lifelong learning habits.",
    icon: BookOpen,
  },
  {
    title: "People",
    description:
      "Nurturing learners who thrive and contribute to the school community, while supporting staff who facilitate excellence.",
    icon: Users,
  },
];

// Cambridge Curriculum Pathway
const curriculumStages = [
  {
    stage: "01",
    title: "Key Stage 3",
    years: "Years 7 & 8",
    subtitle: "Building Strong Foundations",
    description:
      "Learners develop the academic foundation required for their IGCSE studies. A wide range of compulsory subjects provides a balanced introduction to secondary education.",
  },
  {
    stage: "02",
    title: "Cambridge IGCSE",
    years: "Years 9, 10 & 11",
    subtitle: "Exploring Academic Strengths",
    description:
      "Students select between 7 and 10 subjects according to their interests, abilities and career aspirations. Three subjects remain compulsory as core areas of study.",
  },
  {
    stage: "03",
    title: "Cambridge A-Level",
    years: "Advanced Level",
    subtitle: "Preparing for University",
    description:
      "Students specialize in three or four subjects aligned with their future educational and career ambitions, preparing them for university and beyond.",
  },
];

const learningSupport = [
  "Identifying individual strengths and areas for improvement",
  "Developing academic and social skills",
  "Encouraging independent and responsible learning",
  "Building confidence and positive learning habits",
];

const sportsFocus = [
  {
    title: "Recreational Sport",
    description:
      "Encouraging participation, enjoyment, teamwork and active lifestyles.",
    icon: Users,
  },
  {
    title: "Health & Fitness",
    description:
      "Supporting physical wellbeing, discipline and healthy habits.",
    icon: HeartHandshake,
  },
  {
    title: "Competitive Sport",
    description:
      "Developing determination, resilience and a positive competitive spirit.",
    icon: Trophy,
  },
];

export default function SeniorSchool() {
  return (
    <PageLayout title="Senior School">
      <div className="w-full">

        {/* ================= INTRODUCTION ================= */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">

            {/* Introduction */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                MUSTARD SEED INTERNATIONAL SCHOOLS
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                Senior School
              </h2>

              <p className="mt-4 text-lg font-semibold text-amber-600">
                Academic Excellence • Character • Leadership
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Mustard Seed International Schools,
                we provide an all-round and balanced
                education for every learner through
                a broad and inclusive curriculum.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Our educational approach embraces academic,
                social, spiritual, cultural and sporting
                development within a stimulating and
                challenging learning environment.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                We promote tolerance, mutual respect,
                caring relationships, moral accountability,
                personal integrity and professional
                commitment, while working closely with
                parents and other stakeholders.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Our learners come from diverse backgrounds
                and possess different abilities. We nurture
                leadership, service, entrepreneurship
                and life skills alongside strong morals,
                discipline and a positive attitude.
              </p>

              <Link
                to="/admissions/application"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
              >
                Apply for Admission
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Philosophy Card */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-7 shadow-sm md:p-9">

              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-green-700 p-3 text-white">
                  <GraduationCap size={27} />
                </div>

                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                    OUR EDUCATIONAL PHILOSOPHY
                  </span>

                  <h3 className="mt-1 text-2xl font-bold text-gray-900">
                    Developing Future Leaders
                  </h3>
                </div>
              </div>

              <p className="mb-6 leading-8 text-gray-600">
                We provide students with opportunities
                to discover their abilities, develop
                their interests and prepare for
                meaningful contributions to society.
              </p>

              <p className="mb-6 leading-8 text-gray-600">
                Beyond classroom learning, our students
                participate in activities that develop
                confidence, responsibility, teamwork
                and personal growth.
              </p>

              <div className="rounded-xl border-l-4 border-amber-500 bg-white p-5">
                <p className="text-lg font-semibold italic leading-8 text-gray-800">
                  "Developing true world beaters in
                  all spheres of life."
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SCHOOL VALUES ================= */}
        <section className="bg-gray-50 px-4 py-16 md:px-8 lg:py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                WHAT GUIDES US
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Senior School Values
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Our commitment to developing well-rounded
                learners is guided by five key areas
                that shape our educational experience.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">

              {schoolValues.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {value.title}
                    </h3>

                    <p className="flex-1 leading-7 text-gray-600">
                      {value.description}
                    </p>
                  </article>
                );
              })}

              {/* Additional Summary Card */}
              <div className="flex h-full flex-col justify-center rounded-2xl bg-green-800 p-8 text-white">
                <Star size={35} className="mb-5 text-amber-400" />

                <h3 className="mb-4 text-2xl font-bold">
                  Excellence in Every Learner
                </h3>

                <p className="leading-8 text-green-50">
                  Helping students develop knowledge,
                  character and the confidence to
                  achieve their full potential.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CAMBRIDGE CURRICULUM ================= */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-20">

          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
              INTERNATIONAL EDUCATION
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Cambridge Curriculum Pathway
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              As part of the Cambridge International
              family of schools, we provide learners
              with an internationally focused
              educational pathway that prepares
              them for further study and future careers.
            </p>
          </div>

          {/* Curriculum stages */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">

            {curriculumStages.map((stage) => (
              <div
                key={stage.stage}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-md transition-shadow hover:shadow-lg"
              >

                <span className="mb-5 text-5xl font-bold text-green-100">
                  {stage.stage}
                </span>

                <div className="mb-5 inline-flex w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  {stage.years}
                </div>

                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {stage.title}
                </h3>

                <p className="mb-4 font-semibold text-amber-600">
                  {stage.subtitle}
                </p>

                <p className="flex-1 leading-8 text-gray-600">
                  {stage.description}
                </p>

              </div>
            ))}

          </div>
        </section>

        {/* ================= UNIVERSITY PREPARATION ================= */}
        <section className="bg-green-50 px-4 py-16 md:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                  LIFE AFTER SCHOOL
                </span>

                <h2 className="mt-3 mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                  Preparing Students for University & Beyond
                </h2>

                <p className="mb-5 leading-8 text-gray-600">
                  Graduation is a time of excitement,
                  opportunity and important decisions
                  about the future.
                </p>

                <p className="mb-5 leading-8 text-gray-600">
                  We prepare our A-Level students for
                  higher education by encouraging
                  critical thinking, logical analysis
                  and effective communication.
                </p>

                <p className="leading-8 text-gray-600">
                  Our approach combines a firm academic
                  foundation, fresh perspectives and
                  strong partnerships that support
                  students as they progress to the
                  next stage of their education.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm md:p-10">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Compass size={28} />
                </div>

                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Our Approach to Future Success
                </h3>

                <div className="space-y-5">
                  {[
                    {
                      title: "Firm Foundation",
                      description:
                        "Building strong academic knowledge and essential life skills.",
                    },
                    {
                      title: "Fresh Approach",
                      description:
                        "Encouraging independent thinking, creativity and adaptability.",
                    },
                    {
                      title: "Strong Partnerships",
                      description:
                        "Working collaboratively to support successful educational transitions.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={22}
                        className="mt-1 shrink-0 text-green-700"
                      />

                      <div>
                        <h4 className="font-bold text-gray-900">
                          {item.title}
                        </h4>

                        <p className="mt-1 leading-7 text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= LEARNING SUPPORT ================= */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            <div className="rounded-2xl bg-amber-50 p-8 md:p-10">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Brain size={28} />
              </div>

              <h2 className="mb-5 text-3xl font-bold text-gray-900">
                Learning Support Programme
              </h2>

              <p className="mb-5 leading-8 text-gray-600">
                Our Learning Support Programme is
                designed to help students develop
                the academic and social skills
                necessary for a positive and
                successful school experience.
              </p>

              <p className="leading-8 text-gray-600">
                We encourage learners to take
                responsibility for their own
                progress, recognise their
                strengths and weaknesses,
                and work confidently toward
                achieving their goals.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                SUPPORTING EVERY LEARNER
              </span>

              <h3 className="mt-3 mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                Building Confidence Through Individual Support
              </h3>

              <div className="space-y-5">

                {learningSupport.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={22}
                      className="mt-1 shrink-0 text-green-700"
                    />

                    <p className="leading-7 text-gray-600">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* ================= SPORTS ================= */}
        <section className="bg-gray-50 px-4 py-16 md:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                BEYOND ACADEMICS
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Games & Sports
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                We are proud of our sporting
                tradition and remain committed
                to ensuring every learner
                has the opportunity to
                participate, regardless
                of ability.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-3">

              {sportsFocus.map((sport) => {
                const Icon = sport.icon;

                return (
                  <article
                    key={sport.title}
                    className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                      {sport.title}
                    </h3>

                    <p className="flex-1 leading-7 text-gray-600">
                      {sport.description}
                    </p>
                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* ================= ADMISSIONS CTA ================= */}
        <section className="bg-green-800 px-4 py-16 text-center text-white">

          <div className="mx-auto max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-widest text-green-200">
              YOUR FUTURE STARTS HERE
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Become Part of Our Senior School
            </h2>

            <p className="mt-5 text-lg leading-8 text-green-50">
              Discover a Cambridge educational
              pathway that develops academic
              excellence, character, leadership
              and the skills needed for success
              beyond school.
            </p>

            <Link
              to="/admissions/application"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-amber-400 px-8 py-4 font-semibold text-green-950 transition hover:bg-amber-300"
            >
              Apply for Admission
              <ArrowRight size={19} />
            </Link>

          </div>
        </section>

      </div>
    </PageLayout>
  );
}
