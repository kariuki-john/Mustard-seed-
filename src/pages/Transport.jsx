
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bus,
  MapPin,
  ShieldCheck,
  Clock3,
  ArrowRight,
  CheckCircle2,
  Calculator,
  Route,
  Info,
  Users,
  Wallet,
} from "lucide-react";

import PageLayout from "../components/PageLayout";

// Transport routes and fees
const transportRoutes = [
  {
    zone: 1,
    locations: "Mercy Njeri, Nyumba Tano, Olive, Soil",
    amount: 10680,
  },
  {
    zone: 2,
    locations: "Baraka Estate, Notice Board",
    amount: 7650,
  },
  {
    zone: 3,
    locations: "London, Total, Eveready/Githima, Ngata Bridge",
    amount: 17570,
  },
  {
    zone: 4,
    locations:
      "Milimani, Town, Section 58, Shell, Blankets, Kerima, Langalanga, Castles, Kaloleni C, Lakeview, Shabaab, Ngata Gates",
    amount: 26290,
  },
  {
    zone: 5,
    locations: "Njoro, Shinners, Mawanga",
    amount: 29020,
  },
  {
    zone: 6,
    locations: "Kabarak",
    amount: 31790,
  },
  {
    zone: 7,
    locations: "Sobea",
    amount: 36450,
  },
  {
    zone: 8,
    locations: "Machine",
    amount: 37970,
  },
];

const formatKES = (amount) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(amount);

export default function Transport() {
  const [selectedZone, setSelectedZone] = useState("");
  const [tripType, setTripType] = useState("return");

  const currentRoute = transportRoutes.find(
    (route) => route.zone === Number(selectedZone)
  );

  const calculatedFare = currentRoute
    ? tripType === "one-way"
      ? currentRoute.amount * 0.6
      : currentRoute.amount
    : 0;

  return (
    <PageLayout title="Transport">
      <div className="w-full">

        {/* ================= INTRODUCTION ================= */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                MUSTARD SEED INTERNATIONAL SCHOOLS
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                School Transport Services
              </h2>

              <p className="mt-4 text-lg font-semibold text-amber-600">
                Convenient Transport for Our Learners
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our school transport service provides families
                with transport options across designated routes
                and zones.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Explore our transport zones, identify the
                locations served and view the applicable
                termly transport fees.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                We also provide a one-way transport option,
                charged at 60% of the applicable full
                transport fee.
              </p>

              <a
                href="#transport-routes"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
              >
                View Transport Routes
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Overview card */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-7 shadow-sm md:p-9">

              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-green-700 p-3 text-white">
                  <Bus size={27} />
                </div>

                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                    TRANSPORT INFORMATION
                  </span>

                  <h3 className="mt-1 text-2xl font-bold text-gray-900">
                    Plan Your School Journey
                  </h3>
                </div>
              </div>

              <p className="mb-7 leading-8 text-gray-600">
                Our transport fee structure is organised
                into eight zones, helping parents identify
                their relevant routes and estimate
                transport costs.
              </p>

              <div className="space-y-5">

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-green-700"
                  />
                  <span className="leading-7 text-gray-700">
                    Eight designated transport zones
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-green-700"
                  />
                  <span className="leading-7 text-gray-700">
                    Termly transport fee structure
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-green-700"
                  />
                  <span className="leading-7 text-gray-700">
                    One-way transport charged at 60%
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-green-700"
                  />
                  <span className="leading-7 text-gray-700">
                    Routes covering multiple locations
                  </span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ================= TRANSPORT ROUTES TABLE ================= */}
        <section
          id="transport-routes"
          className="bg-gray-50 px-4 py-16 md:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-10 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                ROUTES & FEES
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                School Bus Routes
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Below are the designated transport zones,
                locations served and the corresponding
                transport fees per term.
              </p>
            </div>

            {/* Fees table */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-left">

                  <thead className="bg-green-800 text-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-5 text-sm font-semibold uppercase tracking-wider"
                      >
                        Zone
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-5 text-sm font-semibold uppercase tracking-wider"
                      >
                        Locations & Nearby Points
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-5 text-right text-sm font-semibold uppercase tracking-wider"
                      >
                        Fee Per Term
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {transportRoutes.map((route, index) => (
                      <tr
                        key={route.zone}
                        className={`transition-colors hover:bg-green-50 ${
                          index % 2 === 0
                            ? "bg-white"
                            : "bg-gray-50/70"
                        }`}
                      >
                        <td className="px-6 py-5 align-top">
                          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                            Zone {route.zone}
                          </span>
                        </td>

                        <td className="px-6 py-5 align-top">
                          <div className="flex items-start gap-3">
                            <MapPin
                              size={19}
                              className="mt-1 shrink-0 text-green-700"
                            />

                            <span className="leading-7 text-gray-700">
                              {route.locations}
                            </span>
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-6 py-5 text-right align-top font-bold text-gray-900">
                          {formatKES(route.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

              {/* Fee note */}
              <div className="flex items-start gap-3 border-t border-amber-200 bg-amber-50 px-6 py-5">
                <Info
                  size={22}
                  className="mt-0.5 shrink-0 text-amber-700"
                />

                <p className="leading-7 text-gray-700">
                  <strong>Important:</strong> One-way
                  transport is charged at 60% of the
                  applicable termly transport fee.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FARE CALCULATOR ================= */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-20">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                TRANSPORT FEE ESTIMATOR
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Calculate Your Transport Fee
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Select your transport zone and preferred
                journey option to calculate the
                applicable transport fee per term.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-green-700"
                  />

                  <span className="leading-7 text-gray-700">
                    Return journey: 100% of the listed termly fee
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-green-700"
                  />

                  <span className="leading-7 text-gray-700">
                    One-way journey: 60% of the listed termly fee
                  </span>
                </div>

              </div>
            </div>

            {/* Calculator card */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-7 shadow-sm md:p-9">

              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-xl bg-green-700 p-3 text-white">
                  <Calculator size={25} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  Transport Fee Calculator
                </h3>
              </div>

              <div className="space-y-6">

                {/* Zone selector */}
                <div>
                  <label
                    htmlFor="transport-zone"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Select Transport Zone
                  </label>

                  <select
                    id="transport-zone"
                    value={selectedZone}
                    onChange={(e) =>
                      setSelectedZone(e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="">
                      -- Choose your zone --
                    </option>

                    {transportRoutes.map((route) => (
                      <option
                        key={route.zone}
                        value={route.zone}
                      >
                        Zone {route.zone} - {formatKES(route.amount)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Journey type */}
                <div>
                  <label
                    htmlFor="journey-type"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Journey Type
                  </label>

                  <select
                    id="journey-type"
                    value={tripType}
                    onChange={(e) =>
                      setTripType(e.target.value)
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="return">
                      Return Journey (100%)
                    </option>

                    <option value="one-way">
                      One-Way Journey (60%)
                    </option>
                  </select>
                </div>

                {/* Selected route */}
                {currentRoute && (
                  <div className="rounded-lg border border-green-100 bg-white p-4">
                    <p className="mb-2 text-sm font-semibold text-green-700">
                      Selected Route
                    </p>

                    <p className="leading-7 text-gray-700">
                      {currentRoute.locations}
                    </p>
                  </div>
                )}

                {/* Fare result */}
                <div
                  aria-live="polite"
                  className="rounded-xl bg-green-800 p-6 text-white"
                >
                  <p className="text-sm font-medium text-green-100">
                    Estimated Transport Fee Per Term
                  </p>

                  <p className="mt-3 text-3xl font-bold md:text-4xl">
                    {currentRoute
                      ? formatKES(calculatedFare)
                      : "Select a Zone"}
                  </p>

                  {currentRoute && (
                    <p className="mt-3 text-sm text-green-100">
                      {tripType === "one-way"
                        ? "One-way transport (60%)"
                        : "Return transport (100%)"}
                    </p>
                  )}
                </div>

                <p className="text-sm leading-6 text-gray-500">
                  This calculator uses the published
                  transport fees above. Confirm current
                  fees and route availability with
                  the school before making payment.
                </p>

              </div>
            </div>

          </div>
        </section>

        {/* ================= TRANSPORT ENQUIRIES ================= */}
        <section className="bg-green-50 px-4 py-16 md:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                  TRANSPORT ARRANGEMENTS
                </span>

                <h2 className="mt-3 mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                  Transport Enquiries & Registration
                </h2>

                <p className="mb-5 leading-8 text-gray-600">
                  Parents and guardians can contact the
                  school for information about transport
                  arrangements, route availability and
                  registration procedures.
                </p>

                <p className="leading-8 text-gray-600">
                  Our school team can assist with
                  enquiries about the appropriate
                  transport zone and available
                  arrangements for learners.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm md:p-10">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Route size={28} />
                </div>

                <h3 className="mb-5 text-2xl font-bold text-gray-900">
                  Need Help Finding Your Route?
                </h3>

                <p className="mb-7 leading-8 text-gray-600">
                  If your location is not clearly
                  listed, contact the school to
                  confirm whether transport services
                  are available in your area.
                </p>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 rounded-lg bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
                >
                  Contact the School
                  <ArrowRight size={18} />
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="bg-green-800 px-4 py-16 text-center text-white">

          <div className="mx-auto max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-widest text-green-200">
              MUSTARD SEED INTERNATIONAL SCHOOLS
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Make Your School Journey Easier
            </h2>

            <p className="mt-5 text-lg leading-8 text-green-50">
              Explore our transport routes, compare
              termly fees and contact the school
              to discuss transport arrangements
              for your child.
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
