
import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { Document, Page, pdfjs } from "react-pdf";

import {
  FileText,
  BookOpen,
  ShieldCheck,
  Users,
  LockKeyhole,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Search,
  Info,
  FileCheck2,
  AlertCircle,
} from "lucide-react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF.js worker for React-PDF 9
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();


// Put PDFs inside public/policies/
// Replace filenames with your actual PDF filenames.
const policies = [
  {
    id: 1,
    title: "Child Safeguarding Policy",
    category: "Student Welfare",
    description:
      "Guidelines for safeguarding and protecting learners.",
    file: "/policies/CHILD SAFEGUARDING POLICY.pdf",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Grievance Policy",
    category: "Student Welfare",
    description:
      "Procedures and guidelines for addressing student concerns.",
    file: "/policies/GRIEVANCE POLICY 2026.pdf",
    icon: Users,
  },
  {
    id: 3,
    title: "Attendance Policy",
    category: "School Operations",
    description:
      "School expectations regarding learner attendance.",
    file: "/policies/HR POLICIES PDF.pdf",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Privacy & Data Protection Policy",
    category: "Data Protection",
    description:
      "Guidelines for handling personal information.",
    file: "/policies/HR POLICIES.pdf",
    icon: LockKeyhole,
  }
];

// Read-only PDF viewer
function PolicyViewer({ policy, onClose }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const preventContextMenu = (event) => {
      event.preventDefault();
    };

    const preventShortcuts = (event) => {
      const key = event.key.toLowerCase();

      if (key === "escape") {
        onClose();
        return;
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        ["p", "s"].includes(key)
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", preventShortcuts);
    document.addEventListener("contextmenu", preventContextMenu);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", preventShortcuts);
      document.removeEventListener(
        "contextmenu",
        preventContextMenu
      );
    };
  }, [onClose]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setError("");
  };

  const previousPage = () => {
    setPageNumber((current) => Math.max(1, current - 1));
  };

  const nextPage = () => {
    setPageNumber((current) =>
      Math.min(numPages, current + 1)
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Read ${policy.title}`}
      className="fixed inset-0 z-[9999] flex flex-col bg-gray-950 text-white"
    >
      {/* VIEWER HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 bg-green-900 px-4 py-4 md:px-8">

        <div className="flex min-w-0 items-center gap-3">
          <FileText size={25} className="shrink-0 text-amber-400" />

          <div className="min-w-0">
            <h3 className="truncate text-base font-bold md:text-lg">
              {policy.title}
            </h3>

            <p className="text-xs text-green-100">
              Mustard Seed International Schools
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close document"
          className="rounded-lg bg-white/10 p-2.5 transition hover:bg-red-600"
        >
          <X size={23} />
        </button>
      </div>

      {/* VIEWER CONTROLS */}
      <div className="flex flex-wrap items-center justify-center gap-3 border-b border-white/10 bg-gray-900 px-4 py-3">

        <button
          type="button"
          onClick={previousPage}
          disabled={pageNumber <= 1}
          aria-label="Previous page"
          className="rounded-lg bg-white/10 p-2.5 hover:bg-white/20 disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="min-w-24 text-center text-sm font-medium">
          Page {pageNumber} of {numPages || "—"}
        </span>

        <button
          type="button"
          onClick={nextPage}
          disabled={!numPages || pageNumber >= numPages}
          aria-label="Next page"
          className="rounded-lg bg-white/10 p-2.5 hover:bg-white/20 disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>

        <div className="mx-2 h-6 w-px bg-white/20" />

        <button
          type="button"
          onClick={() =>
            setScale((current) => Math.max(0.7, current - 0.15))
          }
          aria-label="Zoom out"
          className="rounded-lg bg-white/10 p-2.5 hover:bg-white/20"
        >
          <ZoomOut size={20} />
        </button>

        <span className="min-w-12 text-center text-sm">
          {Math.round(scale * 100)}%
        </span>

        <button
          type="button"
          onClick={() =>
            setScale((current) => Math.min(2, current + 0.15))
          }
          aria-label="Zoom in"
          className="rounded-lg bg-white/10 p-2.5 hover:bg-white/20"
        >
          <ZoomIn size={20} />
        </button>
      </div>

      {/* DOCUMENT DISPLAY */}
      <div
        className="relative min-h-0 flex-1 overflow-auto bg-gray-800 px-3 py-6 md:px-8"
        onContextMenu={(event) => event.preventDefault()}
        onDragStart={(event) => event.preventDefault()}
      >
        <div className="mx-auto flex w-fit min-w-0 justify-center">

          <Document
            file={policy.file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={() =>
              setError(
                "Unable to open this document. Please contact the school."
              )
            }
            loading={
              <div className="rounded-xl bg-white p-8 text-gray-700">
                Loading policy document...
              </div>
            }
            error={
              <div className="rounded-xl bg-white p-8 text-red-700">
                {error || "Unable to load the PDF."}
              </div>
            }
          >
            <div className="relative overflow-hidden bg-white shadow-2xl">
              <Page
                pageNumber={pageNumber}
                scale={scale}
                width={Math.min(window.innerWidth - 40, 780)}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />

              {/* Visible document watermark */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
              >
                <span
                  className="-rotate-30 text-center text-2xl font-bold uppercase tracking-widest text-green-900/10 md:text-4xl"
                >
                  MUSTARD SEED SCHOOLS
                  <br />
                  VIEW ONLY
                </span>
              </div>
            </div>
          </Document>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-white/10 bg-gray-950 px-4 py-3 text-center">
        <p className="text-xs leading-5 text-gray-300">
          © Mustard Seed International Schools.
          This document is provided for online reading.
          Unauthorised reproduction is prohibited.
        </p>
      </div>
    </div>
  );
}

export default function Policies() {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPolicies = policies.filter((policy) => {
    const query = searchTerm.toLowerCase();

    return (
      policy.title.toLowerCase().includes(query) ||
      policy.category.toLowerCase().includes(query) ||
      policy.description.toLowerCase().includes(query)
    );
  });

  return (
    <PageLayout title="Policies">
      <div className="w-full">

        {/* PAGE INTRODUCTION */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">

          <span className="text-sm font-semibold uppercase tracking-widest text-green-700">
            MUSTARD SEED INTERNATIONAL SCHOOLS
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
            School Policies & Guidelines
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Explore the policies and guidelines that
            support a safe, respectful and accountable
            learning environment at Mustard Seed
            International Schools.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">
            <FileCheck2 size={18} />
            School Policy Library
          </div>
        </section>

        {/* POLICY LIBRARY */}
        <section className="bg-gray-50 px-4 py-16 md:px-8 lg:py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-9 flex flex-wrap items-center justify-between gap-6">

              <div>
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Available Policies
                </h3>

                <p className="mt-3 text-gray-600">
                  Select a document to read it online.
                </p>
              </div>

              {/* SEARCH */}
              <div className="relative w-full max-w-sm">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder="Search policies..."
                  aria-label="Search policies"
                  className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>
            </div>

            {/* POLICY CARDS */}
            {filteredPolicies.length > 0 ? (
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

                {filteredPolicies.map((policy) => {
                  const Icon = policy.icon;

                  return (
                    <article
                      key={policy.id}
                      className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100 text-green-700">
                        <Icon size={30} />
                      </div>

                      <span className="mb-3 text-xs font-bold uppercase tracking-wider text-amber-700">
                        {policy.category}
                      </span>

                      <h4 className="text-xl font-bold text-gray-900">
                        {policy.title}
                      </h4>

                      <p className="mt-4 flex-1 leading-7 text-gray-600">
                        {policy.description}
                      </p>

                      <div className="mt-7 border-t border-gray-100 pt-5">
                        <button
                          type="button"
                          onClick={() => setSelectedPolicy(policy)}
                          className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-green-700 px-5 py-3.5 font-semibold text-white transition hover:bg-green-800"
                        >
                          <Eye size={20} />
                          Read Policy
                        </button>
                      </div>
                    </article>
                  );
                })}

              </div>
            ) : (
              <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
                <AlertCircle
                  size={34}
                  className="mx-auto mb-4 text-gray-400"
                />

                <h4 className="text-xl font-bold text-gray-900">
                  No Matching Policies
                </h4>

                <p className="mt-3 text-gray-600">
                  Try searching using a different keyword.
                </p>
              </div>
            )}

          </div>
        </section>

        {/* INFORMATION SECTION */}
        <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">

          <div className="flex items-start gap-4 rounded-2xl border border-green-100 bg-green-50 p-7">

            <div className="shrink-0 rounded-xl bg-green-700 p-3 text-white">
              <Info size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Important Information
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                School policy documents are provided
                for information and online reference.
                Visitors are encouraged to read and
                familiarise themselves with the school's
                policies and guidelines.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Documents are presented through a
                read-only viewer without download
                or print controls. This does not
                technically prevent external capture
                or saving of displayed content.
              </p>
            </div>
          </div>
        </section>

        {/* PDF VIEWER */}
        {selectedPolicy && (
          <PolicyViewer
            policy={selectedPolicy}
            onClose={() => setSelectedPolicy(null)}
          />
        )}

      </div>
    </PageLayout>
  );
}
