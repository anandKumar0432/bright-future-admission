"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PageHero from "@/components/PageHero";
import { courseCategories } from "@/lib/site-data";

export default function CoursesClient() {
  const [activeCategory, setActiveCategory] = useState(courseCategories[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && courseCategories.some((c) => c.id === hash)) {
      setActiveCategory(hash);
    }
  }, []);

  const current = courseCategories.find((c) => c.id === activeCategory)!;

  function selectCategory(id: string) {
    setActiveCategory(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <>
      <PageHero
        title="Courses & Programs"
        subtitle="Browse admission options by category. Each course includes eligibility, duration, and our admission support process."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Courses" },
        ]}
      />

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap gap-2">
            {courseCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => selectCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === cat.id
                    ? "bg-brand-red text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-brand-gold-light hover:text-brand-navy"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div id={current.id} className="mb-8 scroll-mt-24 rounded-2xl bg-brand-gold-light p-6">
            <h2 className="text-xl font-bold text-brand-navy">{current.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{current.description}</p>
          </div>

          <div className="space-y-6">
            {current.courses.map((course) => (
              <article
                key={course.name}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              >
                <div className="border-b border-slate-100 bg-gradient-to-r from-brand-navy to-brand-navy-light px-6 py-4">
                  <h3 className="text-lg font-bold text-white">{course.name}</h3>
                  <p className="mt-1 text-sm text-blue-200">{course.tagline}</p>
                </div>
                <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
                  <DetailBlock label="Eligibility" value={course.eligibility} />
                  <DetailBlock label="Duration" value={course.duration} />
                  {course.fees && <DetailBlock label="Fees" value={course.fees} />}
                  <DetailBlock
                    label="Admission Process"
                    value={course.admissionProcess}
                    className={course.fees ? "" : "sm:col-span-2 lg:col-span-2"}
                  />
                </div>
                <div className="flex flex-wrap gap-3 border-t border-slate-100 bg-surface px-6 py-4">
                  <Link
                    href="/admission"
                    className="rounded-lg bg-brand-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-red-dark"
                  >
                    Apply for this course
                  </Link>
                  <a
                    href={`https://wa.me/917992256327?text=${encodeURIComponent(`Hello, I am interested in ${course.name} admission.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-brand-navy transition hover:border-brand-red hover:text-brand-red"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DetailBlock({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`border-b border-slate-100 p-5 sm:border-r last:sm:border-r-0 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{value}</p>
    </div>
  );
}
