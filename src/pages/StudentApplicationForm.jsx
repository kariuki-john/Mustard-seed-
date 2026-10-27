
import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import {
  GraduationCap,
  User,
  Users,
  Mail,
  Phone,
  CalendarDays,
  BookOpen,
  MessageSquare,
  Send,
  CheckCircle2,
  Info,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const SCHOOL_EMAIL = "info@mustardseedschools.co.ke";
const SCHOOL_PHONE = "+254 721 300 121";

const initialForm = {
  studentName: "",
  guardianName: "",
  email: "",
  phone: "",
  schoolLevel: "",
  entryYear: "",
  additionalInfo: "",
};

const schoolLevels = [
  "Early Years KG1",
  "Early Years KG2",
  "Early Years KG3",
  "Junior School Year 1",
  "Junior School Year 2",
  "Junior School Year 3",
  "Junior School Year 4",
  "Junior School Year 5",
  "Junior School Year 6",
  "Senior School Year 7",
  "Senior School Year 8",
  "Senior School Year 9",
  "Senior School Year 10",
  "Senior School Year 11",
  "Senior School Year 12",
  "Senior School Year 13",
];

export default function StudentApplicationForm() {
  const [formData, setFormData] = useState(initialForm);
  const [emailPrepared, setEmailPrepared] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setEmailPrepared(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Student Admission Application - ${formData.studentName} - ${formData.schoolLevel}`
    );

    const emailBody = `
STUDENT ADMISSION APPLICATION
MUSTARD SEED INTERNATIONAL SCHOOLS

----------------------------------------
STUDENT INFORMATION
----------------------------------------

Student's Full Name: ${formData.studentName}
School Level Applied For: ${formData.schoolLevel}
Preferred Entry Year: ${formData.entryYear || "Not specified"}

----------------------------------------
PARENT / GUARDIAN INFORMATION
----------------------------------------

Parent / Guardian Name: ${formData.guardianName}
Email Address: ${formData.email}
Phone Number: ${formData.phone}

----------------------------------------
ADDITIONAL INFORMATION
----------------------------------------

${formData.additionalInfo || "No additional information provided."}

----------------------------------------

Dear Admissions Team,

I would like to apply for admission to Mustard Seed International Schools for the student named above.

Kindly review the application details and advise on the next steps, including admission requirements and assessment procedures.

Thank you.

Kind regards,
${formData.guardianName}

----------------------------------------
Submitted through the school website.
    `.trim();

    const mailtoLink =
      `mailto:${SCHOOL_EMAIL}` +
      `?subject=${subject}` +
      `&body=${encodeURIComponent(emailBody)}`;

    setEmailPrepared(true);

    // Open the visitor's default email application.
    window.location.href = mailtoLink;
  };

  const inputClass =
    "w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-gray-800";

  return (
    <PageLayout title="Student Application Form">
      <div className="w-full">

        {/* ================= INTRODUCTION ================= */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-8 lg:py-16">

          <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
            MUSTARD SEED INTERNATIONAL SCHOOLS
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Begin Your Child's Learning Journey
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Thank you for your interest in joining
            Mustard Seed International Schools.
            Complete the application enquiry form
            below and share the details with our
            Admissions Team.
          </p>

        </section>

        {/* ================= FORM SECTION ================= */}
        <section className="bg-gray-50 px-4 py-12 md:px-8 lg:py-16">

          <div className="mx-auto max-w-5xl">

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">

              {/* FORM HEADER */}
              <div className="bg-green-800 px-6 py-8 text-white md:px-10">

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-white/15 p-3">
                    <GraduationCap size={30} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold md:text-3xl">
                      Student Admission Application
                    </h3>

                    <p className="mt-3 leading-7 text-green-50">
                      Please provide accurate information
                      in the fields below.
                    </p>
                  </div>

                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-10 p-6 md:p-10"
              >

                {/* ================= STUDENT DETAILS ================= */}
                <div>

                  <div className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-4">

                    <div className="rounded-lg bg-green-100 p-2.5 text-green-700">
                      <User size={22} />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Student Information
                      </h4>

                      <p className="text-sm text-gray-500">
                        Details of the student applying for admission
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* STUDENT NAME */}
                    <div>
                      <label
                        htmlFor="studentName"
                        className={labelClass}
                      >
                        Student's Full Name
                        <span className="ml-1 text-red-600">*</span>
                      </label>

                      <input
                        id="studentName"
                        name="studentName"
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Enter student's full name"
                        className={inputClass}
                      />
                    </div>

                    {/* SCHOOL LEVEL */}
                    <div>
                      <label
                        htmlFor="schoolLevel"
                        className={labelClass}
                      >
                        School Level
                        <span className="ml-1 text-red-600">*</span>
                      </label>

                      <select
                        id="schoolLevel"
                        name="schoolLevel"
                        required
                        value={formData.schoolLevel}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">
                          Select school level
                        </option>

                        {schoolLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* ENTRY YEAR */}
                    <div>
                      <label
                        htmlFor="entryYear"
                        className={labelClass}
                      >
                        Preferred Entry Year
                      </label>

                      <input
                        id="entryYear"
                        name="entryYear"
                        type="number"
                        min="2026"
                        max="2100"
                        value={formData.entryYear}
                        onChange={handleChange}
                        placeholder="e.g. 2027"
                        className={inputClass}
                      />
                    </div>

                  </div>
                </div>

                {/* ================= GUARDIAN DETAILS ================= */}
                <div>

                  <div className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-4">

                    <div className="rounded-lg bg-green-100 p-2.5 text-green-700">
                      <Users size={22} />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Parent / Guardian Information
                      </h4>

                      <p className="text-sm text-gray-500">
                        Contact details for admission correspondence
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* GUARDIAN NAME */}
                    <div>
                      <label
                        htmlFor="guardianName"
                        className={labelClass}
                      >
                        Parent / Guardian Name
                        <span className="ml-1 text-red-600">*</span>
                      </label>

                      <input
                        id="guardianName"
                        name="guardianName"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.guardianName}
                        onChange={handleChange}
                        placeholder="Enter parent or guardian name"
                        className={inputClass}
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className={labelClass}
                      >
                        Email Address
                        <span className="ml-1 text-red-600">*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className={inputClass}
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phone"
                        className={labelClass}
                      >
                        Phone Number
                        <span className="ml-1 text-red-600">*</span>
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 0721234567"
                        className={inputClass}
                      />
                    </div>

                  </div>
                </div>

                {/* ================= ADDITIONAL INFORMATION ================= */}
                <div>

                  <div className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-4">

                    <div className="rounded-lg bg-green-100 p-2.5 text-green-700">
                      <MessageSquare size={22} />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Additional Information
                      </h4>

                      <p className="text-sm text-gray-500">
                        Share any other information relevant to the application
                      </p>
                    </div>
                  </div>

                  <label
                    htmlFor="additionalInfo"
                    className={labelClass}
                  >
                    Message / Enquiry
                  </label>

                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={5}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Tell us anything else you would like the Admissions Team to know..."
                    className={`${inputClass} resize-y`}
                  />

                </div>

                {/* ================= NOTICE ================= */}
                <div className="flex items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5">

                  <Info
                    size={24}
                    className="mt-0.5 shrink-0 text-amber-700"
                  />

                  <div>
                    <h5 className="font-bold text-gray-900">
                      How to Submit Your Application
                    </h5>

                    <p className="mt-2 text-sm leading-7 text-gray-700">
                      After completing the form, click
                      <strong> Continue to Email</strong>.
                      Your email application will open
                      with all the details automatically
                      filled in and addressed to the
                      school's Admissions Team.
                      Review the email and press
                      <strong> Send</strong> to submit
                      your application enquiry.
                    </p>
                  </div>
                </div>

                {/* ================= SUBMIT ================= */}
                <div className="border-t border-gray-200 pt-7">

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-700 px-8 py-4 text-base font-bold text-white shadow-sm transition hover:bg-green-800 md:w-auto"
                  >
                    <Send size={20} />
                    Continue to Email
                    <ArrowRight size={19} />
                  </button>

                  {emailPrepared && (
                    <div
                      role="status"
                      className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-5 text-green-800"
                    >
                      <CheckCircle2
                        size={22}
                        className="mt-0.5 shrink-0"
                      />

                      <p className="text-sm leading-7">
                        Your email application should
                        open with the completed details.
                        Please review the email and
                        click Send in your email
                        application to finish submitting.
                        If nothing opens, ensure you
                        have a default email application
                        configured.
                      </p>
                    </div>
                  )}

                  <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-gray-500">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                    The website does not automatically
                    send or store the form information.
                    You will send it using your own
                    email application.
                  </p>

                </div>

              </form>
            </div>

            {/* ================= SUPPORT ================= */}
            <div className="mt-8 rounded-xl border border-green-100 bg-green-50 p-6 text-center">

              <h4 className="text-lg font-bold text-gray-900">
                Need Help With Your Application?
              </h4>

              <p className="mt-3 leading-7 text-gray-600">
                Our Admissions Team is available
                to assist with any questions.
              </p>

              <a
                href={`mailto:${SCHOOL_EMAIL}`}
                className="mt-4 inline-flex items-center gap-2 break-all font-semibold text-green-700 hover:underline"
              >
                <Mail size={18} />
                {SCHOOL_EMAIL}
                <br/>
                <span className="text-sm text-green-700">
                  Call: {SCHOOL_PHONE}
                </span>
              </a>

            </div>

          </div>
        </section>

      </div>
    </PageLayout>
  );
}
