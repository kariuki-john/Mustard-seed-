
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Monitor,
  FlaskConical,
  Trophy,
  HeartHandshake,
  Users,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Sparkles,
  LibraryBig,
  School,
} from "lucide-react";

import PageLayout from "../components/PageLayout";

// Academic learning facilities
const academicFeatures = [
  {
    title: "Broad & Balanced Curriculum",
    description:
      "Our stimulating curriculum is enriched with meaningful learning experiences and activities that appeal to all learners. We use topic-based and e-learning approaches to make learning interconnected, engaging and well structured.",
    icon: BookOpen,
  },
  {
    title: "Library & Literacy",
    description:
      "Our Junior School library serves as a literacy laboratory where English language and communication skills are developed and strengthened.",
    icon: LibraryBig,
  },
  {
    title: "Science & Discovery",
    description:
      "Scientific enquiry and problem-solving skills are steadily developed through practical learning experiences in our well-equipped science laboratory.",
    icon: FlaskConical,
  },
  {
    title: "ICT & Digital Learning",
    description:
      "Our well-furnished ICT centre supports the integration of e-learning across subjects, helping learners develop essential digital skills.",
    icon: Monitor,
  },
];

// School values and approach
const schoolHighlights = [
  "A safe, happy and caring learning environment",
  "High academic standards and holistic development",
  "Creative thinking and intelligent decision-making",
  "Strong partnerships between parents and teachers",
];

export default function JuniorSchool() {
  return (
    <PageLayout title="Junior School">
      <div className="w-full">

        {/* ================= INTRODUCTION ================= */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">

            {/* Left content */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                MUSTARD SEED INTERNATIONAL SCHOOLS
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                Junior School
              </h2>

              <p className="mt-4 text-lg font-semibold text-amber-600">
                Key Stages 1 & 2 | Ages 5 to 11 Years
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Mustard Seed International Schools Junior Wing
                provides high-quality education within a safe,
                happy and caring environment.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Our curriculum is enriched with real-life
                experiences that encourage children to think
                imaginatively and make intelligent choices.
                We strive to achieve the highest possible
                standards while nurturing each child's
                individual strengths and abilities.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                We believe that educating our children is a
                partnership between home and school. We work
                closely with parents as equal partners to
                ensure that every child's experience at
                MSIS Junior Wing is enjoyable, rewarding
                and successful.
              </p>

              <Link
                to="/admissions/application"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
              >
                Apply for Admission
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right highlights card */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-7 shadow-sm md:p-9">

              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-green-700 p-3 text-white">
                  <School size={26} />
                </div>

                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                    OUR SCHOOL PHILOSOPHY
                  </span>

                  <h3 className="mt-1 text-2xl font-bold text-gray-900">
                    Rise and Shine
                  </h3>
                </div>
              </div>

              <p className="mb-7 leading-8 text-gray-600">
                Our school motto, "Rise and Shine", inspires
                us to create an environment where children
                develop confidence, curiosity, creativity
                and a lifelong passion for learning.
              </p>

              <ul className="space-y-5">
                {schoolHighlights.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-green-700"
                    />

                    <span className="leading-7 text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* ================= ACADEMIC CURRICULUM ================= */}
        <section className="bg-gray-50 px-4 py-16 md:px-8 lg:py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                ACADEMIC EXCELLENCE
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Academic Curriculum
              </h2>

              <p className="mt-5 text-base leading-8 text-gray-600">
                We ensure that all children enjoy a broad and
                balanced curriculum that helps them develop
                a wide range of educational skills through
                engaging classroom activities, practical
                experiences and technology-supported learning.
              </p>
            </div>

            {/* Academic feature cards */}
            <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2">

              {academicFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={index}
                    className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-9"
                  >

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                      {feature.title}
                    </h3>

                    <p className="flex-1 text-base leading-8 text-gray-600">
                      {feature.description}
                    </p>

                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* ================= CO-CURRICULAR ACTIVITIES ================= */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            <div className="rounded-2xl bg-amber-50 p-8 md:p-10">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Trophy size={28} />
              </div>

              <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                BEYOND THE CLASSROOM
              </span>

              <h2 className="mt-3 mb-5 text-3xl font-bold text-gray-900">
                Co-Curricular Activities
              </h2>

              <p className="leading-8 text-gray-600">
                We offer a wide variety of co-curricular
                activities to enhance the learning and
                development of all children throughout
                the academic year.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                These include clubs, movements and a wide
                range of sports that help learners discover
                their talents, build confidence and develop
                teamwork and leadership skills.
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-green-100 p-3 text-green-700">
                  <Users size={25} />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Clubs & Movements
                  </h3>

                  <p className="leading-7 text-gray-600">
                    Opportunities for learners to engage
                    in group activities, develop friendships
                    and strengthen their interests.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-green-100 p-3 text-green-700">
                  <Trophy size={25} />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Sports & Recreation
                  </h3>

                  <p className="leading-7 text-gray-600">
                    Sporting activities encourage physical
                    wellbeing, discipline, cooperation
                    and healthy competition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-green-100 p-3 text-green-700">
                  <Lightbulb size={25} />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Talent Development
                  </h3>

                  <p className="leading-7 text-gray-600">
                    Children are encouraged to explore
                    their abilities, express creativity
                    and develop new skills beyond
                    academic learning.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= INCLUSIVE EDUCATION ================= */}
        <section className="bg-green-50 px-4 py-16 md:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                  EVERY CHILD MATTERS
                </span>

                <h2 className="mt-3 mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                  Special Educational Needs Support
                </h2>

                <p className="mb-5 leading-8 text-gray-600">
                  Our staff are committed to meeting the
                  needs of all children within a nurturing
                  and inclusive environment.
                </p>

                <p className="mb-5 leading-8 text-gray-600">
                  We believe every child is entitled to
                  a broad and balanced curriculum, and
                  we strive to ensure that all learners
                  can participate in our wide range
                  of educational activities.
                </p>

                <p className="leading-8 text-gray-600">
                  Some children may experience specific
                  learning, behavioural or physical
                  challenges. We work closely with
                  parents to provide appropriate teaching,
                  guidance and support, encouraging
                  parental involvement at every stage.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm md:p-10">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <HeartHandshake size={28} />
                </div>

                <h3 className="mb-5 text-2xl font-bold text-gray-900">
                  A Supportive Learning Environment
                </h3>

                <p className="mb-6 leading-8 text-gray-600">
                  Our approach focuses on recognising
                  individual learning needs, encouraging
                  participation and fostering a sense
                  of belonging for every learner.
                </p>

                <div className="space-y-4">
                  {[
                    "Individual learning support",
                    "Inclusive classroom participation",
                    "Teacher and parent collaboration",
                    "Continuous encouragement and guidance",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="shrink-0 text-green-700"
                      />

                      <span className="text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= PARENTAL INVOLVEMENT ================= */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            <div className="rounded-2xl bg-gray-50 p-8 md:p-10">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <HeartHandshake size={28} />
              </div>

              <h2 className="mb-5 text-3xl font-bold text-gray-900">
                Parental Involvement
              </h2>

              <p className="mb-5 leading-8 text-gray-600">
                We value strong and positive relationships
                with parents and recognise their important
                role in every child's educational journey.
              </p>

              <p className="leading-8 text-gray-600">
                Parents are welcome to participate in
                school activities, attend workshops,
                parents' meetings and special events.
                Together, we create a supportive
                community that helps every child succeed.
              </p>
            </div>

            <div className="space-y-5">

              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                STRONGER TOGETHER
              </span>

              <h3 className="text-3xl font-bold text-gray-900">
                Building a Strong Home-School Partnership
              </h3>

              <p className="leading-8 text-gray-600">
                At Mustard Seed International Schools,
                we believe meaningful collaboration
                between teachers and parents enhances
                learning outcomes and supports the
                overall wellbeing of every child.
              </p>

              <div className="border-l-4 border-amber-400 bg-amber-50 p-6">
                <p className="text-lg font-semibold italic leading-8 text-gray-800">
                  "MSIS Junior School – The Strong Link
                  in the MSIS Pathway Chain."
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= ADMISSIONS CTA ================= */}
        <section className="bg-green-800 px-4 py-16 text-center text-white">

          <div className="mx-auto max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-widest text-green-200">
              JOIN OUR SCHOOL COMMUNITY
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Give Your Child a Strong Foundation
            </h2>

            <p className="mt-5 text-lg leading-8 text-green-50">
              Discover an inspiring Junior School
              experience that nurtures academic
              excellence, creativity, confidence
              and character.
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
