
import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Loader2,
} from "lucide-react";

import schoolImage from "../images/msisview.jpeg";

const SCHOOL_EMAIL = "info@mustardseedschools.co.ke";
const SCHOOL_PHONE = "0721300121";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  department: "",
  subject: "",
  message: "",
};

export default function ContactUs() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.department ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `${formData.department}: ${formData.subject}`
    );

    const body = encodeURIComponent(
      `CONTACT FORM ENQUIRY\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Department: ${formData.department}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink =
      `mailto:${SCHOOL_EMAIL}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setStatus(
      "Your email application should open with your enquiry ready. Please press Send in your email application to complete the process."
    );
  };

  return (
    <PageLayout title="Contact Us">
      <div className="w-full">

        {/* ================= PAGE INTRODUCTION ================= */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">

          
          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            We'd Love to Hear From You
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Have a question about admissions, academic programmes,
            school visits or general enquiries? Our team is
            happy to assist you.
          </p>

        </section>

        {/* ================= FORM + IMAGE ================= */}
        <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 lg:pb-20">

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
             <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-green-900 shadow-lg lg:min-h-full">

              <img
                src={schoolImage}
                alt="Mustard Seed International Schools campus"
                className="absolute inset-0 h-full w-full object-cover "
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 via-green-900/35 to-transparent" />

              {/* Image content */}
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">

                <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                  WELCOME TO MUSTARD SEED
                </span>

                <h3 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                  Where Every Child's Journey Matters
                </h3>

                <p className="mt-4 max-w-lg text-base leading-8 text-green-50">
                  We value strong partnerships with
                  parents, guardians and our wider
                  school community.
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-white/25 pt-6">
                  <div className="rounded-full bg-amber-400 p-2 text-green-950">
                    <GraduationCap size={21} />
                  </div>

                  <span className="text-sm font-medium">
                    Learning • Growth • Excellence
                  </span>
                </div>

              </div>
            </div>

            {/* LEFT SIDE - CONTACT FORM */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-9">

              <div className="mb-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <MessageSquare size={27} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Send Us a Message
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Fill in the form below and send your
                  enquiry to our school team.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* NAME */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Email Address <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="07XXXXXXXX"
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                    />
                  </div>
                </div>

                {/* DEPARTMENT */}
                <div>
                  <label
                    htmlFor="department"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Enquiry Type <span className="text-red-600">*</span>
                  </label>

                  <select
                    id="department"
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                  >
                    <option value="">Select enquiry type</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Early Years">Early Years</option>
                    <option value="Junior School">Junior School</option>
                    <option value="Senior School">Senior School</option>
                    <option value="Boarding">Boarding</option>
                    <option value="School Transport">School Transport</option>
                    <option value="School Fees">School Fees</option>
                    <option value="Careers">Careers & Employment</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Subject <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your enquiry about?"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Your Message <span className="text-red-600">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full resize-y rounded-lg border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* STATUS MESSAGE */}
                {status && (
                  <div
                    role="status"
                    className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-800"
                  >
                    {status}
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-green-700 px-6 py-4 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Preparing Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Continue to Email
                      <ArrowRight size={19} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-6 text-gray-500">
                  This form opens your email application
                  with the message prepared. You must
                  press Send in your email application.
                </p>

              </form>
            </div>

            {/* RIGHT SIDE - SCHOOL IMAGE */}
           

          </div>
        </section>

        {/* ================= CONTACT INFORMATION ================= */}
        <section className="bg-gray-50 px-4 py-16 md:px-8 lg:py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-11 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
                OUR CONTACT INFORMATION
              </span>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Other Ways to Reach Us
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
                Prefer to speak with someone directly?
                You can contact the school using the
                details below.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

              {/* EMAIL */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Mail size={29} />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  Email Us
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Send us your enquiries and we will
                  be happy to assist.
                </p>

                <a
                  href={`mailto:${SCHOOL_EMAIL}`}
                  className="mt-5 block break-all font-semibold text-green-700 hover:underline"
                >
                  {SCHOOL_EMAIL}
                </a>
              </div>

              {/* PHONE */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Phone size={29} />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  Call Us
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Speak with our team for more
                  information and assistance.
                </p>

                <a
                  href={`tel:${SCHOOL_PHONE}`}
                  className="mt-5 block text-xl font-bold text-green-700 hover:underline"
                >
                  {SCHOOL_PHONE}
                </a>
              </div>

              {/* LOCATION */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <MapPin size={29} />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  Visit Our School
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Interested in visiting our campus?
                  Contact us to arrange a school visit.
                </p>

                <p className="mt-5 font-semibold text-green-700">
                  Kenya
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  Contact the school for exact directions.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="bg-green-800 px-4 py-16 text-center text-white">

          <div className="mx-auto max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-widest text-green-200">
              CONNECT WITH OUR SCHOOL
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              We Look Forward to Hearing From You
            </h2>

            <p className="mt-5 text-lg leading-8 text-green-50">
              Whether you're enquiring about admissions,
              arranging a school visit or seeking
              more information about our programmes,
              our team is here to help.
            </p>

            <a
              href={`tel:${SCHOOL_PHONE}`}
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-amber-400 px-8 py-4 font-semibold text-green-950 transition hover:bg-amber-300"
            >
              <Phone size={19} />
              Call Our School
              <ArrowRight size={18} />
            </a>

          </div>
        </section>

      </div>
    </PageLayout>
  );
}
