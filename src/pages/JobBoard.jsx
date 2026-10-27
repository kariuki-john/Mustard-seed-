
import React from "react";
import PageLayout from "../components/PageLayout";
import {
  BriefcaseBusiness,
  Mail,
  Phone,
  FileText,
  GraduationCap,
  FolderOpen,
  Send,
  CheckCircle2,
  Users,
  ArrowRight,
  Info,
} from "lucide-react";

const applicationDocuments = [
  {
    title: "Application Letter",
    description:
      "A formal application letter expressing your interest in working with us.",
    icon: FileText,
  },
  {
    title: "Curriculum Vitae (CV)",
    description:
      "An updated CV outlining your qualifications, experience and skills.",
    icon: Users,
  },
  {
    title: "Academic Documents",
    description:
      "Copies of your relevant academic certificates and qualifications.",
    icon: GraduationCap,
  },
  {
    title: "Supporting Documents",
    description:
      "Any other relevant professional certificates or supporting documents.",
    icon: FolderOpen,
  },
];

export default function JobBoard() {
  const email = "info@mustardseedschools.co.ke";
  const phone = "0721300121";

  const emailSubject = encodeURIComponent(
    "Expression of Interest - Employment Opportunity"
  );

  const emailBody = encodeURIComponent(
    "Dear Recruitment Team,\n\n" +
    "I would like to express my interest in future employment " +
    "opportunities at Mustard Seed International Schools.\n\n" +
    "Please find my application documents attached.\n\n" +
    "Kind regards,\n" +
    "[Your Full Name]\n" +
    "[Your Phone Number]"
  );

  const emailLink =
    `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <PageLayout title="Job Board">
      <div className="w-full">

        {/* ================= INTRODUCTION ================= */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
              MUSTARD SEED INTERNATIONAL SCHOOLS
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Careers & Employment Opportunities
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Join a dedicated team committed to academic
              excellence, professional growth and nurturing
              the next generation of leaders.
            </p>

          </div>
        </section>

        {/* ================= VACANCY STATUS ================= */}
        <section className="mx-auto max-w-5xl px-4 pb-16 md:px-8">

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">

            <div className="border-b border-gray-100 bg-gray-50 px-6 py-5 md:px-10">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness
                  size={25}
                  className="text-green-700"
                />

                <h3 className="text-xl font-bold text-gray-900">
                  Current Job Opportunities
                </h3>
              </div>
            </div>

            <div className="px-6 py-12 text-center md:px-10 md:py-16">

              <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <BriefcaseBusiness size={37} />
              </div>

              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-800">
                <Info size={17} />
                No Open Vacancies
              </span>

              <h3 className="mt-6 text-2xl font-bold text-gray-900 md:text-3xl">
                There Are Currently No Open Vacancies
              </h3>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
                Thank you for your interest in joining
                Mustard Seed International Schools.
                At the moment, we do not have any
                advertised job vacancies.
              </p>

              <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
                However, we welcome applications from
                qualified and passionate individuals
                who would like to be considered
                for future employment opportunities.
              </p>

              <a
                href="#submit-application"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
              >
                Submit Your Application
                <ArrowRight size={19} />
              </a>

            </div>
          </div>
        </section>

        {/* ================= APPLICATION DOCUMENTS ================= */}
        <section className="bg-gray-50 px-4 py-16 md:px-8 lg:py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 max-w-3xl">

              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                FUTURE CAREER OPPORTUNITIES
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Interested in Working With Us?
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Although there are currently no open
                vacancies, interested applicants
                are encouraged to submit their
                documents to our official school
                email address for consideration
                when suitable opportunities arise.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Please ensure that your application
                includes the following documents:
              </p>

            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

              {applicationDocuments.map((document) => {
                const Icon = document.icon;

                return (
                  <article
                    key={document.title}
                    className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {document.title}
                    </h3>

                    <p className="flex-1 leading-7 text-gray-600">
                      {document.description}
                    </p>

                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* ================= APPLICATION SUBMISSION ================= */}
        <section
          id="submit-application"
          className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-20"
        >

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Left content */}
            <div>

              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                HOW TO APPLY
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Send Us Your Application
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                If you are interested in future
                employment opportunities at
                Mustard Seed International Schools,
                kindly send your application letter,
                updated CV, academic documents and
                any other relevant supporting
                documents to our official email.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                For additional information or
                enquiries about employment
                opportunities, you may contact
                the school directly by phone.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-green-700"
                  />

                  <p className="leading-7 text-gray-700">
                    Prepare all relevant application documents.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-green-700"
                  />

                  <p className="leading-7 text-gray-700">
                    Send your application to the official school email.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-green-700"
                  />

                  <p className="leading-7 text-gray-700">
                    Indicate the position or area of interest
                    in your email subject.
                  </p>
                </div>

              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-2xl border border-green-100 bg-green-50 p-7 shadow-sm md:p-10">

              <div className="mb-7 flex items-center gap-4">

                <div className="rounded-xl bg-green-700 p-3 text-white">
                  <Send size={27} />
                </div>

                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                    APPLICATION CONTACTS
                  </span>

                  <h3 className="mt-1 text-2xl font-bold text-gray-900">
                    Get in Touch
                  </h3>
                </div>
              </div>

              {/* Email */}
              <div className="mb-6 rounded-xl border border-green-100 bg-white p-5">

                <div className="mb-3 flex items-center gap-3">
                  <Mail
                    size={22}
                    className="text-green-700"
                  />

                  <h4 className="font-bold text-gray-900">
                    School Email
                  </h4>
                </div>

                <a
                  href={`mailto:${email}`}
                  className="break-all font-medium text-green-700 hover:underline"
                >
                  {email}
                </a>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Send your application letter, CV,
                  academic documents and supporting
                  certificates to this address.
                </p>
              </div>

              {/* Phone */}
              <div className="mb-7 rounded-xl border border-green-100 bg-white p-5">

                <div className="mb-3 flex items-center gap-3">
                  <Phone
                    size={22}
                    className="text-green-700"
                  />

                  <h4 className="font-bold text-gray-900">
                    Telephone Enquiries
                  </h4>
                </div>

                <a
                  href={`tel:${phone}`}
                  className="text-xl font-bold text-green-700 hover:underline"
                >
                  {phone}
                </a>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Call the school for more information
                  about employment enquiries.
                </p>
              </div>

              {/* Email action */}
              <a
                href={emailLink}
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-green-700 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-800"
              >
                <Mail size={20} />
                Email Your Application
                <ArrowRight size={18} />
              </a>

              <p className="mt-4 text-center text-xs leading-6 text-gray-500">
                Please remember to attach your documents
                before sending the email.
              </p>

            </div>
          </div>
        </section>

        {/* ================= FINAL MESSAGE ================= */}
        <section className="bg-green-800 px-4 py-16 text-center text-white">

          <div className="mx-auto max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-widest text-green-200">
              GROW WITH MUSTARD SEED
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Your Career Journey Could Start Here
            </h2>

            <p className="mt-5 text-lg leading-8 text-green-50">
              We appreciate your interest in becoming
              part of our school community. Even
              when no vacancies are advertised,
              we welcome expressions of interest
              from individuals who share our
              commitment to education and excellence.
            </p>

            <a
              href={emailLink}
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-amber-400 px-8 py-4 font-semibold text-green-950 transition hover:bg-amber-300"
            >
              Send Your CV
              <ArrowRight size={19} />
            </a>

          </div>
        </section>

      </div>
    </PageLayout>
  );
}
