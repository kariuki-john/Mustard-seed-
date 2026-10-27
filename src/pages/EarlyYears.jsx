
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Lightbulb,
  Users,
  Sparkles,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

import PageLayout from "../components/PageLayout";

const learningGoals = [
  "Shape relationships built on trust, inquiry, joy and respect",
  "Become active and curious learners",
  "Become critical and creative thinkers",
  "Learn tools to be successful in a school environment",
];

const learningAreas = [
  {
    title: "Communication & Literacy",
    description: "Communication, language and literacy development.",
    icon: BookOpen,
  },
  {
    title: "Numeracy & Reasoning",
    description: "Numeracy, problem-solving and reasoning skills.",
    icon: Lightbulb,
  },
  {
    title: "Creative Development",
    description: "Creativity, imagination and self-expression.",
    icon: Sparkles,
  },
  {
    title: "Understanding the World",
    description: "Knowledge and understanding of the world around us.",
    icon: GraduationCap,
  },
  {
    title: "Physical Development",
    description: "Physical growth, movement and wellbeing.",
    icon: Heart,
  },
  {
    title: "Personal & Social Development",
    description: "Personal, social and emotional development.",
    icon: Users,
  },
];

export default function EarlyYears() {
  return (
    <PageLayout title="Early Years" >

      <div className="w-full">

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">

          <div className="mb-10 max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
              MUSTARD SEED INTERNATIONAL SCHOOLS
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Early Years Education
            </h2>

            <p className="mt-3 text-lg font-semibold text-amber-600">
              Kindergarten | Ages 2 to 5 Years
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Play, exploration, and nurturing relationships create
              a strong foundation for young learners. We provide a
              caring, stimulating and supportive environment where
              every child is encouraged to discover, grow and thrive.
            </p>
          </div>

          {/* LEARNING THROUGH DISCOVERY */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                OUR LEARNING APPROACH
              </span>

              <h3 className="mt-3 mb-5 text-2xl font-bold text-gray-900 md:text-3xl">
                Learning Through Discovery
              </h3>

              <div className="space-y-5 text-base leading-8 text-gray-600">

                <p>
                  We offer the British Curriculum right from Early Years.
                  Our program is collaborative, developmentally appropriate,
                  and built on the tenets of teaching to the whole child.
                </p>

                <p>
                  Our classroom environment is enriched by playful inquiry,
                  as well as social and emotional support. This explains
                  why the children in our Kindergarten grow to be
                  inquisitive, reflective and critical thinkers.
                </p>

                <p>
                  We believe that learner-driven and teacher-guided subject
                  matter often comes alive because our curriculum creates
                  meaning through deep exploration.
                </p>

                <p>
                  Classroom and out-of-class investigations are integral
                  to our program. This helps our children develop a
                  strong sense of self and community.
                </p>

              </div>
            </div>

            {/* LEARNING GOALS */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-6 shadow-sm md:p-8">

              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-green-700 p-3 text-white">
                  <Heart size={24} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  Our Learning Goals
                </h3>
              </div>

              <p className="mb-6 leading-7 text-gray-600">
                Our Kindergarten upholds practical goals that guide
                our curriculum design and each child's learning.
                We meet children at their individual abilities and
                work in partnership to achieve these goals
                throughout the year.
              </p>

              <ul className="space-y-4">
                {learningGoals.map((goal, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-green-700"
                    />

                    <span className="leading-7 text-gray-700">
                      {goal}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </section>

        {/* CURRICULUM AREAS */}
        <section className="bg-gray-50 px-4 py-16 md:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="mb-10 text-center">

              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                HOLISTIC CHILD DEVELOPMENT
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Areas of Learning
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
                Our undertakings are in harmony with the areas of
                learning and development set out in the Early Years
                Foundation Stage curriculum.
              </p>
            </div>

            {/* SIX LEARNING CARDS */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {learningAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <div
                    key={index}
                    className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {area.title}
                    </h3>

                    <p className="flex-1 leading-7 text-gray-600">
                      {area.description}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* LEARNING THROUGH PLAY */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            <div className="rounded-2xl bg-amber-50 p-8 md:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Sparkles size={28} />
              </div>

              <h2 className="mb-5 text-3xl font-bold text-gray-900">
                Learning Through Play
              </h2>

              <p className="mb-5 leading-8 text-gray-600">
                Mustard Seed Early Years believes in giving every
                child opportunities to play, grow and learn.
              </p>

              <p className="leading-8 text-gray-600">
                Through play, children develop empathy,
                collaboration and kindness. Leadership skills
                begin to emerge naturally.
              </p>
            </div>

            <div className="space-y-5 text-base leading-8 text-gray-600">

              <h3 className="text-2xl font-bold text-gray-900">
                Where Curiosity Meets Creativity
              </h3>

              <p>
                Play is the foundation for experiential learning
                for young children. Allowing children space and
                time with others, together with appropriate toys,
                provides valuable learning opportunities.
              </p>

              <p>
                We create positive and enjoyable experiences
                that help our children understand and process
                their world through creativity, imagination,
                literacy, thinking and problem-solving skills,
                while enhancing their psychomotor development.
              </p>

              <p className="font-semibold text-green-700">
                You are welcome to our Early Years Section,
                where great care and fun underpin quality education.
              </p>

            </div>
          </div>
        </section>

        {/* ADMISSIONS CALL TO ACTION */}
        <section className="bg-green-800 px-4 py-16 text-center text-white">

          <div className="mx-auto max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-widest text-green-200">
              BEGIN YOUR CHILD'S JOURNEY
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Give Your Child a Great Start
            </h2>

            <p className="mt-5 text-lg leading-8 text-green-50">
              Join our caring school community and give your child
              the opportunity to learn, explore and grow in a
              supportive environment.
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
