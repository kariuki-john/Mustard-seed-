
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BedDouble,
  ShowerHead,
  LockKeyhole,
  UtensilsCrossed,
  ShieldCheck,
  Users,
  Tv,
  BookOpen,
  HeartHandshake,
  HeartPulse,
  CalendarDays,
  Clock,
  CheckCircle2,
  Home,
  Sparkles,
} from "lucide-react";

import PageLayout from "../components/PageLayout";

// Boarding facilities
const boardingFacilities = [
  {
    title: "Comfortable Accommodation",
    description:
      "Spacious cubicles fitted with comfortable beds, providing a welcoming and restful environment for our boarders.",
    icon: BedDouble,
  },
  {
    title: "Hot Water Facilities",
    description:
      "Hot water is available to support students' personal hygiene and daily comfort.",
    icon: ShowerHead,
  },
  {
    title: "Personal Storage",
    description:
      "Individual pigeonholes are provided for the safe custody and organisation of students' personal belongings.",
    icon: LockKeyhole,
  },
  {
    title: "Balanced & Nutritious Meals",
    description:
      "A balanced diet is provided, with consideration for students who have special dietary requirements.",
    icon: UtensilsCrossed,
  },
  {
    title: "Secure Environment",
    description:
      "Our boarding facilities are protected by a perimeter wall, with staff supervision supporting a safe living environment.",
    icon: ShieldCheck,
  },
  {
    title: "Individualised Care",
    description:
      "Dedicated staff members are present to provide individual attention, guidance and care to boarders.",
    icon: Users,
  },
];

// Weekend activities
const weekendActivities = [
  {
    title: "Talent Development",
    description:
      "Learners participate in activities that encourage creativity, personal interests and the development of their talents.",
    icon: Sparkles,
  },
  {
    title: "Educational Recreation",
    description:
      "Well-monitored entertainment and educationally appropriate leisure activities promote relaxation and social interaction.",
    icon: Tv,
  },
  {
    title: "Dedicated Study Time",
    description:
      "Valuable weekend study periods help boarders revise, complete assignments and develop independent learning habits.",
    icon: BookOpen,
  },
];

export default function FlexBoarding() {
  return (
    <PageLayout title="Flex Boarding">
      <div className="w-full">

        {/* ================= INTRODUCTION ================= */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">

            {/* Introduction content */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                MUSTARD SEED INTERNATIONAL SCHOOLS
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                Flexible Boarding
              </h2>

              <p className="mt-4 text-lg font-semibold text-amber-600">
                The Mustard Home — A Home Away From Home
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our boarding wing provides modern living quarters
                designed to offer learners a comfortable, caring
                and supportive home away from home.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                We understand the importance of family connections.
                That is why our boarding programme is flexible,
                allowing learners to spend weekends off campus
                when requested by their parents and approved
                by the school.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                At The Mustard Home, we combine comfortable
                accommodation, individualised care, balanced
                nutrition, academic support and recreational
                activities to promote the holistic development
                of every learner.
              </p>

              <Link
                to="/admissions/application"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
              >
                Apply for Boarding
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Introduction highlight */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-7 shadow-sm md:p-9">

              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-green-700 p-3 text-white">
                  <Home size={27} />
                </div>

                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                    OUR BOARDING PHILOSOPHY
                  </span>

                  <h3 className="mt-1 text-2xl font-bold text-gray-900">
                    A Home Away From Home
                  </h3>
                </div>
              </div>

              <p className="mb-7 leading-8 text-gray-600">
                We strive to provide an environment where
                learners feel secure, valued and cared for
                while developing independence, responsibility
                and meaningful friendships.
              </p>

              <div className="space-y-4">
                {[
                  "Modern and comfortable living quarters",
                  "Flexible weekend arrangements",
                  "Individual attention and care",
                  "Academic and personal development",
                  "A supportive boarding community",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-green-700"
                    />

                    <span className="leading-7 text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= BOARDING FACILITIES ================= */}
        <section className="bg-gray-50 px-4 py-16 md:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">

            <div className="mb-12 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                COMFORT, CARE & SECURITY
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Boarding Facilities
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                The Mustard Home offers facilities and services
                designed to support students' comfort, safety,
                wellbeing and daily living needs.
              </p>
            </div>

            {/* Six facility cards */}
            <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">

              {boardingFacilities.map((facility) => {
                const Icon = facility.icon;

                return (
                  <article
                    key={facility.title}
                    className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                      {facility.title}
                    </h3>

                    <p className="flex-1 leading-7 text-gray-600">
                      {facility.description}
                    </p>
                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* ================= FLEXIBLE BOARDING ================= */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            <div className="rounded-2xl bg-amber-50 p-8 md:p-10">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <CalendarDays size={28} />
              </div>

              <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">
                FLEXIBILITY FOR FAMILIES
              </span>

              <h2 className="mt-3 mb-5 text-3xl font-bold text-gray-900">
                Flexible Weekend Boarding
              </h2>

              <p className="mb-5 leading-8 text-gray-600">
                Our boarding programme recognises the importance
                of maintaining strong family relationships
                while providing learners with a structured
                and supportive school environment.
              </p>

              <p className="leading-8 text-gray-600">
                Learners may spend weekends away from campus
                when requested by their parents and approved
                through the school's arrangements.
              </p>
            </div>

            <div className="space-y-6">

              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                A BALANCED BOARDING EXPERIENCE
              </span>

              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Supporting School Life and Family Time
              </h3>

              <p className="leading-8 text-gray-600">
                Our approach provides learners with opportunities
                to benefit from school-based academic support,
                structured activities and meaningful time
                with their families.
              </p>

              <div className="space-y-4">
                {[
                  "Parent-requested weekend leave",
                  "Structured boarding routines",
                  "Opportunities for family connection",
                  "Supervised school-based activities",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-green-700"
                    />

                    <span className="leading-7 text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= WEEKEND ACTIVITIES ================= */}
        <section className="bg-green-50 px-4 py-16 md:px-8 lg:py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                LEARNING BEYOND THE CLASSROOM
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Weekend Life at The Mustard Home
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
                During weekends, learners participate in
                educationally enriching activities, talent
                development and supervised recreation
                while also enjoying valuable study time.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-3">

              {weekendActivities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <article
                    key={activity.title}
                    className="group flex h-full flex-col rounded-2xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                      {activity.title}
                    </h3>

                    <p className="flex-1 leading-7 text-gray-600">
                      {activity.description}
                    </p>
                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* ================= PARENTAL VISITS ================= */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                FAMILY CONNECTIONS
              </span>

              <h2 className="mt-3 mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Parental Visits
              </h2>

              <p className="mb-5 leading-8 text-gray-600">
                We recognise the important role parents
                play in the wellbeing and development
                of their children.
              </p>

              <p className="mb-5 leading-8 text-gray-600">
                Parents are encouraged to visit their
                children, provided the visits are
                arranged in advance with the school.
              </p>

              <p className="leading-8 text-gray-600">
                This helps us maintain an organised
                boarding environment while supporting
                meaningful family interactions.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm md:p-10">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <HeartHandshake size={28} />
              </div>

              <h3 className="mb-5 text-2xl font-bold text-gray-900">
                Working Together with Parents
              </h3>

              <p className="mb-6 leading-8 text-gray-600">
                Our boarding team values positive
                communication and collaboration
                with families to support every
                learner's comfort, happiness
                and personal development.
              </p>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={22}
                  className="mt-1 shrink-0 text-green-700"
                />

                <p className="leading-7 text-gray-700">
                  All parental visits should be
                  pre-arranged with the school.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= LEARNER WELFARE ================= */}
        <section className="bg-gray-50 px-4 py-16 md:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

              <div className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm md:p-10">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <HeartPulse size={28} />
                </div>

                <h3 className="mb-5 text-2xl font-bold text-gray-900">
                  Learner Welfare & Healthcare
                </h3>

                <p className="leading-8 text-gray-600">
                  Quality healthcare is provided by
                  a resident nurse who works closely
                  with the school matron, the Head
                  of Mustard Home and the Senior
                  Management Team.
                </p>
              </div>

              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                  CARE THAT MATTERS
                </span>

                <h2 className="mt-3 mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                  Every Learner's Wellbeing Comes First
                </h2>

                <p className="mb-5 leading-8 text-gray-600">
                  Our boarding staff work together
                  to provide personalised attention
                  and a caring living environment
                  for all learners.
                </p>

                <p className="leading-8 text-gray-600">
                  Through close collaboration between
                  healthcare staff, boarding personnel
                  and school management, we aim
                  to support learners' physical,
                  emotional and social wellbeing.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= ADMISSIONS CTA ================= */}
        <section className="bg-green-800 px-4 py-16 text-center text-white">

          <div className="mx-auto max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-widest text-green-200">
              WELCOME TO THE MUSTARD HOME
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              A Comfortable Home Away From Home
            </h2>

            <p className="mt-5 text-lg leading-8 text-green-50">
              Discover a flexible boarding experience
              that combines comfort, care, security,
              academic support and opportunities
              for personal growth.
            </p>

            <Link
              to="/admissions/application"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-amber-400 px-8 py-4 font-semibold text-green-950 transition hover:bg-amber-300"
            >
              Apply for Boarding
              <ArrowRight size={19} />
            </Link>

          </div>
        </section>

      </div>
    </PageLayout>
  );
}
