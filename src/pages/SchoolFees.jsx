
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  School,
  Wallet,
  CreditCard,
  Calculator,
  CheckCircle2,
  Info,
  Copy,
  Check,
  ArrowRight,
  Bus,
  Music,
  ShieldCheck,
  Phone,
  Mail,
} from "lucide-react";

import PageLayout from "../components/PageLayout";

// ================= SCHOOL FEES DATA =================

const feeData = {
  early: {
    title: "Early Years",
    subtitle: "Playgroup & Kindergarten",
    assessment: 2000,
    rows: [
      { level: "PG", dayJoining: 57350, dayTermly: 38500 },
      { level: "K1", dayJoining: 61750, dayTermly: 42900 },
      { level: "K2", dayJoining: 61750, dayTermly: 42900 },
      { level: "K3", dayJoining: 61750, dayTermly: 42900 },
    ],
  },

  junior: {
    title: "Junior School",
    subtitle: "Cambridge Primary | Years 1–6",
    assessment: 3000,
    rows: [
      {
        level: "Year 1",
        dayJoining: 83500,
        dayTermly: 51800,
        boardingJoining: 156240,
        boardingTermly: 98800,
      },
      {
        level: "Year 2",
        dayJoining: 83500,
        dayTermly: 51800,
        boardingJoining: 156240,
        boardingTermly: 98800,
      },
      {
        level: "Year 3",
        dayJoining: 93200,
        dayTermly: 61500,
        boardingJoining: 177000,
        boardingTermly: 108900,
      },
      {
        level: "Year 4",
        dayJoining: 93200,
        dayTermly: 61500,
        boardingJoining: 177000,
        boardingTermly: 108900,
      },
      {
        level: "Year 5",
        dayJoining: 100600,
        dayTermly: 68900,
        boardingJoining: 211200,
        boardingTermly: 132800,
      },
      {
        level: "Year 6",
        dayJoining: 100600,
        dayTermly: 68900,
        boardingJoining: 211200,
        boardingTermly: 132800,
      },
    ],
  },

  senior: {
    title: "Senior School",
    subtitle: "Years 7–13 | Supplied 2021 Fee Schedule",
    assessment: 3500,
    rows: [
      {
        level: "Year 7",
        dayJoining: 142000,
        dayTermly: 80000,
        boardingJoining: 249500,
        boardingTermly: 164300,
      },
      {
        level: "Year 8",
        dayJoining: 142000,
        dayTermly: 80000,
        boardingJoining: 249500,
        boardingTermly: 164300,
      },
      {
        level: "Year 9",
        dayJoining: 151500,
        dayTermly: 90250,
        boardingJoining: 265800,
        boardingTermly: 171500,
      },
      {
        level: "Year 10",
        dayJoining: 151500,
        dayTermly: 90250,
        boardingJoining: 265800,
        boardingTermly: 171500,
      },
      {
        level: "Year 11",
        dayJoining: 164300,
        dayTermly: 92600,
        boardingJoining: 270500,
        boardingTermly: 176050,
      },
      {
        level: "Year 12",
        dayJoining: 163250,
        dayTermly: 91580,
        boardingJoining: 265850,
        boardingTermly: 171580,
      },
      {
        level: "Year 13",
        dayJoining: 163250,
        dayTermly: 91580,
        boardingJoining: 265830,
        boardingTermly: 171580,
      },
    ],
  },
};

// ================= PAYMENT INFORMATION =================

const paymentMethods = [
  {
    name: "Equity Bank",
    account: "0130200214177",
  },
  {
    name: "Family Bank",
    account: "019000008200",
  },
  {
    name: "SBM Bank",
    account: "0112032743001",
  },
  {
    name: "ABSA Bank",
    account: "027-1147651",
  },
  {
    name: "M-Pesa Paybill",
    account: "4097865",
  },
];

const formatKES = (value) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(value);

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  const copyValue = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={copyValue}
      aria-label={`Copy ${value}`}
      className="inline-flex items-center gap-1 rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-100"
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

// ================= FEES TABLE =================

function FeesTable({ category }) {
  const data = feeData[category];
  const hasBoarding = category !== "early";

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      <div className="bg-green-800 px-6 py-6 text-white">
        <h3 className="text-2xl font-bold">
          {data.title} Fees
        </h3>
        <p className="mt-2 text-green-100">
          {data.subtitle}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] border-collapse text-left">

          <thead className="bg-green-50 text-gray-800">
            <tr>
              <th
                scope="col"
                rowSpan={2}
                className="border-b border-gray-200 px-5 py-4"
              >
                Level
              </th>

              <th
                scope="colgroup"
                colSpan={2}
                className="border-b border-gray-200 px-5 py-4 text-center"
              >
                Day Scholars
              </th>

              {hasBoarding && (
                <th
                  scope="colgroup"
                  colSpan={2}
                  className="border-b border-gray-200 px-5 py-4 text-center"
                >
                  Boarders
                </th>
              )}
            </tr>

            <tr className="bg-gray-50 text-sm">
              <th scope="col" className="px-5 py-4 text-right">
                Joining Fee
              </th>
              <th scope="col" className="px-5 py-4 text-right">
                Termly Fee
              </th>

              {hasBoarding && (
                <>
                  <th scope="col" className="px-5 py-4 text-right">
                    Joining Fee
                  </th>
                  <th scope="col" className="px-5 py-4 text-right">
                    Termly Fee
                  </th>
                </>
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {data.rows.map((row, index) => (
              <tr
                key={row.level}
                className={
                  index % 2 === 0
                    ? "bg-white hover:bg-green-50"
                    : "bg-gray-50/60 hover:bg-green-50"
                }
              >
                <td className="px-5 py-5 font-bold text-gray-900">
                  {row.level}
                </td>

                <td className="whitespace-nowrap px-5 py-5 text-right text-gray-700">
                  {formatKES(row.dayJoining)}
                </td>

                <td className="whitespace-nowrap px-5 py-5 text-right font-semibold text-green-800">
                  {formatKES(row.dayTermly)}
                </td>

                {hasBoarding && (
                  <>
                    <td className="whitespace-nowrap px-5 py-5 text-right text-gray-700">
                      {formatKES(row.boardingJoining)}
                    </td>

                    <td className="whitespace-nowrap px-5 py-5 text-right font-semibold text-green-800">
                      {formatKES(row.boardingTermly)}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-amber-200 bg-amber-50 px-6 py-5">
        <Info size={21} className="text-amber-700" />

        <p className="text-sm text-gray-700">
          Assessment Fee:{" "}
          <strong>{formatKES(data.assessment)}</strong>
        </p>
      </div>
    </div>
  );
}

// ================= MAIN PAGE =================

export default function SchoolFees() {
  const [activeCategory, setActiveCategory] = useState("early");

  const [calcCategory, setCalcCategory] = useState("early");
  const [calcLevel, setCalcLevel] = useState("PG");
  const [studentType, setStudentType] = useState("day");
  const [feeType, setFeeType] = useState("termly");
  const [includeAssessment, setIncludeAssessment] = useState(false);

  const currentLevels = feeData[calcCategory].rows;

  const selectedLevel =
    currentLevels.find((row) => row.level === calcLevel) ||
    currentLevels[0];

  const selectedFee = useMemo(() => {
    if (!selectedLevel) return 0;

    const isBoarder =
      studentType === "boarding" && calcCategory !== "early";

    let amount = 0;

    if (feeType === "joining") {
      amount = isBoarder
        ? selectedLevel.boardingJoining
        : selectedLevel.dayJoining;
    } else {
      amount = isBoarder
        ? selectedLevel.boardingTermly
        : selectedLevel.dayTermly;
    }

    if (includeAssessment) {
      amount += feeData[calcCategory].assessment;
    }

    return amount;
  }, [
    selectedLevel,
    studentType,
    calcCategory,
    feeType,
    includeAssessment,
  ]);

  const changeCalcCategory = (value) => {
    setCalcCategory(value);
    setCalcLevel(feeData[value].rows[0].level);

    if (value === "early") {
      setStudentType("day");
    }
  };

  return (
    <PageLayout title="School Fees">
      <div className="w-full">

        {/* ================= INTRODUCTION ================= */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">

          <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
            MUSTARD SEED INTERNATIONAL SCHOOLS
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            School Fees Structure
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Explore the fee structures for Early Years,
            Junior School and Senior School, including
            day scholar and boarding options.
          </p>

          <div className="mt-8 flex max-w-4xl items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <Info
              size={23}
              className="mt-1 shrink-0 text-amber-700"
            />

            <p className="text-sm leading-7 text-gray-700">
              <strong>Fee schedule notice:</strong> The figures
              below are taken from the supplied school fee
              schedules, including a Senior School schedule
              labelled 2021. They have not been verified as
              current. Please confirm applicable fees and
              payment details with the school before payment.
            </p>
          </div>
        </section>

        {/* ================= CATEGORY TABS ================= */}
        <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">

          <div className="mb-8 flex flex-wrap gap-3">

            {[
              { id: "early", label: "Early Years", icon: School },
              { id: "junior", label: "Junior School", icon: BookOpen },
              { id: "senior", label: "Senior School", icon: GraduationCap },
            ].map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-3 rounded-lg px-6 py-3.5 font-semibold transition ${
                    activeCategory === category.id
                      ? "bg-green-700 text-white shadow-md"
                      : "border border-gray-200 bg-white text-gray-700 hover:bg-green-50"
                  }`}
                >
                  <Icon size={20} />
                  {category.label}
                </button>
              );
            })}

          </div>

          <FeesTable category={activeCategory} />

          {/* ================= ADDITIONAL FEES ================= */}
          <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-2">

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <h3 className="mb-5 text-2xl font-bold text-gray-900">
                Additional Charges
              </h3>

              <div className="space-y-5">

                <div>
                  <p className="font-semibold text-gray-900">
                    Canteen Milk
                  </p>

                  {activeCategory === "early" ? (
                    <p className="mt-1 leading-7 text-gray-600">
                      {formatKES(3500)} per term
                      (compulsory).
                    </p>
                  ) : (
                    <p className="mt-1 leading-7 text-gray-600">
                      Day Scholars: {formatKES(3500)} per term.
                      <br />
                      Boarders: {formatKES(3500)} per term,
                      or {formatKES(8000)} for extra milk provision.
                    </p>
                  )}
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Flexi Boarding
                  </p>

                  <p className="mt-1 leading-7 text-gray-600">
                    {formatKES(1000)} per day.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    School Transport
                  </p>

                  <p className="mt-1 leading-7 text-gray-600">
                    Transport charges for day scholars
                    depend on destination.
                  </p>

                  <Link
                    to="/our-school/transport"
                    className="mt-2 inline-flex items-center gap-2 font-semibold text-green-700 hover:underline"
                  >
                    View Transport Routes
                    <ArrowRight size={16} />
                  </Link>
                </div>

              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <h3 className="mb-5 text-2xl font-bold text-gray-900">
                {activeCategory === "early"
                  ? "Joining Fee Information"
                  : "Optional Special Classes"}
              </h3>

              {activeCategory === "early" ? (
                <>
                  <p className="mb-5 leading-7 text-gray-600">
                    The joining fee includes:
                  </p>

                  {[
                    "Admission",
                    "Fees per term",
                    "Full supply of uniform",
                  ].map((item) => (
                    <div
                      key={item}
                      className="mb-4 flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-green-700"
                      />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </>
              ) : (
                <div className="space-y-4">

                  <div className="flex justify-between gap-4">
                    <span className="text-gray-700">
                      Music
                    </span>
                    <strong className="text-gray-900">
                      KSh 8,000
                    </strong>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-gray-700">
                      Taekwondo
                    </span>
                    <strong className="text-gray-900">
                      KSh 2,500
                    </strong>
                  </div>

                  {activeCategory === "junior" && (
                    <>
                      <div className="flex justify-between gap-4">
                        <span className="text-gray-700">
                          Skating
                        </span>
                        <strong className="text-gray-900">
                          KSh 6,000
                        </strong>
                      </div>

                      <div className="flex justify-between gap-4">
                        <span className="text-gray-700">
                          Ballet
                        </span>
                        <strong className="text-gray-900">
                          KSh 5,000
                        </strong>
                      </div>
                    </>
                  )}

                  <p className="border-t border-gray-100 pt-4 text-sm leading-6 text-gray-500">
                    Optional training fees are per term.
                    Music, skating and ballet include
                    10 sessions where specified in the
                    supplied fee schedule.
                  </p>

                </div>
              )}

            </div>
          </div>
        </section>

        {/* ================= FEE CALCULATOR ================= */}
        <section className="bg-gray-50 px-4 py-16 md:px-8 lg:py-20">

          <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                  PLAN YOUR SCHOOL FEES
                </span>

                <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                  School Fee Calculator
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  Select your child's school section,
                  class and preferred schooling option
                  to estimate the applicable joining
                  or termly fee.
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  You can also include the assessment
                  fee in your calculation.
                </p>

                <div className="mt-7 flex items-start gap-3">
                  <Info
                    size={22}
                    className="mt-1 shrink-0 text-amber-600"
                  />

                  <p className="text-sm leading-7 text-gray-600">
                    The calculator displays the selected
                    fee as listed in the supplied schedule.
                    Joining fees and termly fees are
                    alternative displayed amounts;
                    they should not automatically
                    be added together.
                  </p>
                </div>
              </div>

              {/* Calculator Card */}
              <div className="rounded-2xl border border-green-100 bg-white p-7 shadow-lg md:p-9">

                <div className="mb-7 flex items-center gap-3">
                  <div className="rounded-xl bg-green-700 p-3 text-white">
                    <Calculator size={25} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    Calculate School Fees
                  </h3>
                </div>

                <div className="space-y-5">

                  <div>
                    <label
                      htmlFor="school-category"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      School Section
                    </label>

                    <select
                      id="school-category"
                      value={calcCategory}
                      onChange={(e) =>
                        changeCalcCategory(e.target.value)
                      }
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800"
                    >
                      <option value="early">Early Years</option>
                      <option value="junior">Junior School</option>
                      <option value="senior">Senior School</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="school-level"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Class / Level
                    </label>

                    <select
                      id="school-level"
                      value={calcLevel}
                      onChange={(e) =>
                        setCalcLevel(e.target.value)
                      }
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800"
                    >
                      {currentLevels.map((row) => (
                        <option key={row.level} value={row.level}>
                          {row.level}
                        </option>
                      ))}
                    </select>
                  </div>

                  {calcCategory !== "early" && (
                    <div>
                      <label
                        htmlFor="student-type"
                        className="mb-2 block text-sm font-semibold text-gray-800"
                      >
                        Student Type
                      </label>

                      <select
                        id="student-type"
                        value={studentType}
                        onChange={(e) =>
                          setStudentType(e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800"
                      >
                        <option value="day">Day Scholar</option>
                        <option value="boarding">Boarder</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="fee-type"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Fee Type
                    </label>

                    <select
                      id="fee-type"
                      value={feeType}
                      onChange={(e) =>
                        setFeeType(e.target.value)
                      }
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800"
                    >
                      <option value="joining">Joining Fee</option>
                      <option value="termly">Termly Fee</option>
                    </select>
                  </div>

                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeAssessment}
                      onChange={(e) =>
                        setIncludeAssessment(e.target.checked)
                      }
                      className="h-5 w-5 accent-green-700"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      Include assessment fee (
                      {formatKES(feeData[calcCategory].assessment)})
                    </span>
                  </label>

                  {/* Calculated result */}
                  <div
                    aria-live="polite"
                    className="rounded-xl bg-green-800 p-6 text-white"
                  >
                    <p className="text-sm font-medium text-green-100">
                      Estimated {feeType === "joining"
                        ? "Joining"
                        : "Termly"} Fee
                    </p>

                    <p className="mt-3 text-3xl font-bold md:text-4xl">
                      {formatKES(selectedFee)}
                    </p>

                    <p className="mt-3 text-sm text-green-100">
                      {calcLevel} •{" "}
                      {calcCategory === "early"
                        ? "Day Scholar"
                        : studentType === "boarding"
                        ? "Boarder"
                        : "Day Scholar"}
                    </p>
                  </div>

                  <p className="text-xs leading-6 text-gray-500">
                    Excludes transport, optional activities,
                    canteen charges and other applicable costs
                    unless explicitly included. Confirm
                    current fees with the school.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PAYMENT MODES ================= */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-20">

          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
              PAYMENT INFORMATION
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              School Fee Payment Modes
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              The following bank and Paybill details
              were supplied in the school fee schedule.
              Please confirm them with the school
              before making any payment.
            </p>
          </div>

          <div className="mb-8 rounded-xl border border-green-100 bg-green-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              Account Name
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              Mustard Seed School Ltd
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >

                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-green-100 p-3 text-green-700">
                    {method.name.includes("Paybill") ? (
                      <CreditCard size={24} />
                    ) : (
                      <Wallet size={24} />
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    {method.name}
                  </h3>
                </div>

                <p className="mb-2 text-sm text-gray-500">
                  {method.name.includes("Paybill")
                    ? "Business Number"
                    : "Account Number"}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="break-all font-bold text-gray-900">
                    {method.account}
                  </span>

                  <CopyButton value={method.account} />
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="bg-green-800 px-4 py-16 text-center text-white">

          <div className="mx-auto max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-widest text-green-200">
              ADMISSIONS & ENQUIRIES
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Start Your Child's Learning Journey
            </h2>

            <p className="mt-5 text-lg leading-8 text-green-50">
              Contact our admissions team to confirm
              the latest fee structure, discuss
              available schooling options and
              begin the admission process.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                to="/admissions/application"
                className="inline-flex items-center gap-3 rounded-lg bg-amber-400 px-7 py-4 font-semibold text-green-950 transition hover:bg-amber-300"
              >
                Apply for Admission
                <ArrowRight size={18} />
              </Link>

              <a
                href="mailto:info@mustardseedschools.co.ke?subject=School%20Fees%20Enquiry"
                className="inline-flex items-center gap-3 rounded-lg border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <Mail size={18} />
                Enquire About Fees
              </a>

            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
