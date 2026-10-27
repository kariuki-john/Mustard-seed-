
import React, { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Flag,
  Info,
  RotateCcw,
} from "lucide-react";
import PageLayout from "../components/PageLayout";

// Kenya-local date (avoids browser timezone differences)
function kenyaToday() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const value = (type) =>
    Number(parts.find((p) => p.type === type)?.value);

  return {
    year: value("year"),
    month: value("month") - 1,
    day: value("day"),
  };
}

const WEEKDAYS = [
  "Mon", "Tue", "Wed", "Thu",
  "Fri", "Sat", "Sun",
];

const MONTHS = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December",
];

const dateKey = (year, month, day) =>
  `${year}-${String(month + 1).padStart(2, "0")}-${String(
    day
  ).padStart(2, "0")}`;

// Calculates the date of Easter Sunday.
// Used for Good Friday and Easter Monday.
function easterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);

  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  return new Date(Date.UTC(year, month - 1, day));
}

function getKenyanHolidays(year) {
  const holidays = {};

  const add = (month, day, name) => {
    const key = dateKey(year, month, day);
    holidays[key] = name;
  };

  // Recurring fixed-date holidays
  add(0, 1, "New Year's Day");
  add(4, 1, "Labour Day");
  add(5, 1, "Madaraka Day");
  add(9, 10, "Mazingira Day");
  add(9, 20, "Mashujaa Day");
  add(11, 12, "Jamhuri Day");
  add(11, 25, "Christmas Day");
  add(11, 26, "Boxing Day");

  // Easter-based holidays
  const easter = easterSunday(year);

  const goodFriday = new Date(easter);
  goodFriday.setUTCDate(easter.getUTCDate() - 2);

  const easterMonday = new Date(easter);
  easterMonday.setUTCDate(easter.getUTCDate() + 1);

  add(
    goodFriday.getUTCMonth(),
    goodFriday.getUTCDate(),
    "Good Friday"
  );

  add(
    easterMonday.getUTCMonth(),
    easterMonday.getUTCDate(),
    "Easter Monday"
  );

  // Confirmed 2026 dates for movable religious holidays.
  // Update this list when dates for future years
  // are officially gazetted.
  if (year === 2026) {
    add(2, 20, "Idd-ul-Fitr");
    add(4, 27, "Idd-ul-Azha");
  }

  return holidays;
}

export default function Calendar() {
  const today = kenyaToday();

  const [displayDate, setDisplayDate] = useState(
    () => new Date(today.year, today.month, 1)
  );

  const [selectedDay, setSelectedDay] = useState(today.day);

  const year = displayDate.getFullYear();
  const month = displayDate.getMonth();

  const holidays = useMemo(
    () => getKenyanHolidays(year),
    [year]
  );

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  // Monday-first weekday index
  const firstDayOffset =
    (new Date(year, month, 1).getDay() + 6) % 7;

  const calendarCells = [
    ...Array(firstDayOffset).fill(null),
    ...Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    ),
  ];

  // Fill the last row to complete weeks
  while (calendarCells.length % 7 !== 0) {
    calendarCells.push(null);
  }

  const monthHolidays = Object.entries(holidays)
    .filter(([key]) => {
      const prefix =
        `${year}-${String(month + 1).padStart(2, "0")}-`;
      return key.startsWith(prefix);
    })
    .sort(([a], [b]) => a.localeCompare(b));

  const changeMonth = (offset) => {
    setDisplayDate(
      new Date(year, month + offset, 1)
    );
    setSelectedDay(null);
  };

  const goToToday = () => {
    const current = kenyaToday();
    setDisplayDate(
      new Date(current.year, current.month, 1)
    );
    setSelectedDay(current.day);
  };

  const isToday = (day) =>
    day === today.day &&
    month === today.month &&
    year === today.year;

  const selectedHoliday = selectedDay
    ? holidays[dateKey(year, month, selectedDay)]
    : null;

  return (
    <PageLayout title="Calendar">
      <div className="w-full">

        {/* PAGE INTRODUCTION */}
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
            MUSTARD SEED INTERNATIONAL SCHOOLS
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            School Calendar
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Stay connected to school life. Browse the
            monthly calendar, view dates and see Kenyan
            public holidays throughout the year.
          </p>
        </section>

        {/* MAIN CALENDAR */}
        <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">

            {/* CALENDAR HEADER */}
            <div className="bg-green-800 px-5 py-6 text-white md:px-8">

              <div className="flex flex-wrap items-center justify-between gap-5">

                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-white/15 p-3">
                    <CalendarDays size={27} />
                  </div>

                  <div>
                    <p className="text-sm text-green-100">
                      Monthly Calendar
                    </p>

                    <h3 className="text-2xl font-bold md:text-3xl">
                      {MONTHS[month]} {year}
                    </h3>
                  </div>
                </div>

                {/* MONTH NAVIGATION */}
                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    onClick={() => changeMonth(-1)}
                    aria-label="Previous month"
                    className="rounded-lg border border-white/25 p-3 transition hover:bg-white/15"
                  >
                    <ChevronLeft size={21} />
                  </button>

                  <button
                    type="button"
                    onClick={goToToday}
                    className="rounded-lg bg-amber-400 px-5 py-3 font-semibold text-green-950 transition hover:bg-amber-300"
                  >
                    Today
                  </button>

                  <button
                    type="button"
                    onClick={() => changeMonth(1)}
                    aria-label="Next month"
                    className="rounded-lg border border-white/25 p-3 transition hover:bg-white/15"
                  >
                    <ChevronRight size={21} />
                  </button>

                </div>
              </div>

              {/* MONTH / YEAR SELECTORS */}
              <div className="mt-6 flex flex-wrap gap-3">

                <select
                  aria-label="Select month"
                  value={month}
                  onChange={(e) => {
                    setDisplayDate(
                      new Date(year, Number(e.target.value), 1)
                    );
                    setSelectedDay(null);
                  }}
                  className="rounded-lg border border-white/30 bg-white px-4 py-2.5 font-medium text-gray-800"
                >
                  {MONTHS.map((name, index) => (
                    <option key={name} value={index}>
                      {name}
                    </option>
                  ))}
                </select>

                <select
                  aria-label="Select year"
                  value={year}
                  onChange={(e) => {
                    setDisplayDate(
                      new Date(Number(e.target.value), month, 1)
                    );
                    setSelectedDay(null);
                  }}
                  className="rounded-lg border border-white/30 bg-white px-4 py-2.5 font-medium text-gray-800"
                >
                  {Array.from(
                    { length: 11 },
                    (_, index) => today.year - 5 + index
                  ).map((optionYear) => (
                    <option key={optionYear} value={optionYear}>
                      {optionYear}
                    </option>
                  ))}
                </select>

              </div>
            </div>

            {/* WEEKDAY HEADINGS */}
            <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
              {WEEKDAYS.map((day) => (
                <div
                  key={day}
                  className="py-4 text-center text-xs font-bold uppercase tracking-wide text-gray-600 sm:text-sm"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* CALENDAR DATES */}
            <div className="grid grid-cols-7">

              {calendarCells.map((day, index) => {
                if (!day) {
                  return (
                    <div
                      key={`empty-${index}`}
                      className="min-h-20 border-b border-r border-gray-100 bg-gray-50/60 sm:min-h-28"
                    />
                  );
                }

                const holiday =
                  holidays[dateKey(year, month, day)];

                const todayCell = isToday(day);
                const selected = selectedDay === day;

                const weekday = index % 7;
                const weekend = weekday >= 5;

                return (
                  <button
                    type="button"
                    key={`${year}-${month}-${day}`}
                    onClick={() => setSelectedDay(day)}
                    aria-label={`${day} ${MONTHS[month]} ${year}${
                      holiday ? `, ${holiday}` : ""
                    }`}
                    aria-pressed={selected}
                    className={[
                      "relative flex min-h-20 flex-col items-start border-b border-r border-gray-100 p-2 text-left transition sm:min-h-28 sm:p-3",
                      holiday
                        ? "bg-amber-50 hover:bg-amber-100"
                        : weekend
                        ? "bg-gray-50 hover:bg-green-50"
                        : "bg-white hover:bg-green-50",
                      selected
                        ? "ring-2 ring-inset ring-green-600"
                        : "",
                    ].join(" ")}
                  >
                    {/* DATE NUMBER */}
                    <span
                      className={[
                        "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                        todayCell
                          ? "bg-green-700 text-white"
                          : holiday
                          ? "bg-amber-200 text-amber-900"
                          : "text-gray-800",
                      ].join(" ")}
                    >
                      {day}
                    </span>

                    {/* HOLIDAY LABEL */}
                    {holiday && (
                      <>
                        <span className="mt-2 hidden rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold leading-5 text-amber-900 sm:block">
                          {holiday}
                        </span>

                        <span className="mt-2 h-2 w-2 rounded-full bg-amber-500 sm:hidden" />
                      </>
                    )}

                    {/* TODAY INDICATOR */}
                    {todayCell && (
                      <span className="mt-1 text-[10px] font-bold uppercase text-green-700">
                        Today
                      </span>
                    )}
                  </button>
                );
              })}

            </div>

            {/* CALENDAR LEGEND */}
            <div className="flex flex-wrap items-center gap-6 border-t border-gray-200 bg-white px-5 py-5 text-sm text-gray-600 md:px-8">

              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-full bg-green-700" />
                Today
              </div>

              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-full bg-amber-400" />
                Public Holiday
              </div>

              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded border border-gray-300 bg-gray-100" />
                Weekend
              </div>

            </div>

          </div>

          {/* SELECTED DAY + MONTH HOLIDAYS */}
          <div className="mt-8 grid grid-cols-1 items-start gap-7 lg:grid-cols-2">

            {/* SELECTED DAY */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-green-100 p-3 text-green-700">
                  <CalendarDays size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  Selected Date
                </h3>
              </div>

              {selectedDay ? (
                <>
                  <p className="text-2xl font-bold text-gray-900">
                    {selectedDay} {MONTHS[month]} {year}
                  </p>

                  {selectedHoliday ? (
                    <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
                      <div className="flex items-start gap-3">
                        <Flag
                          size={23}
                          className="mt-1 shrink-0 text-amber-700"
                        />

                        <div>
                          <p className="font-bold text-amber-900">
                            Public Holiday
                          </p>

                          <p className="mt-2 text-lg text-gray-800">
                            {selectedHoliday}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="mt-4 text-gray-600">
                      No public holiday listed for this date.
                    </p>
                  )}
                </>
              ) : (
                <p className="leading-7 text-gray-600">
                  Click any date on the calendar to view
                  its details.
                </p>
              )}

            </div>

            {/* HOLIDAYS THIS MONTH */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
                  <Flag size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  Public Holidays in {MONTHS[month]}
                </h3>
              </div>

              {monthHolidays.length > 0 ? (
                <div className="space-y-3">
                  {monthHolidays.map(([key, name]) => {
                    const day = Number(key.slice(-2));

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        className="flex w-full items-center gap-4 rounded-xl bg-amber-50 p-4 text-left transition hover:bg-amber-100"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-200 font-bold text-amber-900">
                          {day}
                        </div>

                        <div>
                          <p className="font-semibold text-gray-900">
                            {name}
                          </p>

                          <p className="text-sm text-gray-600">
                            {day} {MONTHS[month]} {year}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="leading-7 text-gray-600">
                  No public holidays are currently listed
                  for this month.
                </p>
              )}

            </div>
          </div>

          {/* INFORMATION NOTE */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-5">
            <Info
              size={23}
              className="mt-1 shrink-0 text-blue-700"
            />

            <p className="text-sm leading-7 text-gray-700">
              Public holidays are based on the Kenyan
              holiday calendar. Additional holidays may
              be declared by the government. Dates for
              Eid and other movable holidays must be
              confirmed against official gazette notices.
              School-specific events and term dates can
              be added separately.
            </p>
          </div>

        </section>
      </div>
    </PageLayout>
  );
}
