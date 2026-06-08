import React from 'react';

const Coverage = () => {
  return (
    <section className="px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-6 rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Coverage
        </p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Nationwide delivery coverage
        </h1>
        <p className="text-slate-600">
          This page is now a real React component, so it can render when you
          open the /coverage route.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              Fast delivery
            </h2>
            <p className="mt-2 text-slate-600">
              Reach customers across major districts and cities with reliable
              dispatch support.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              Live tracking
            </h2>
            <p className="mt-2 text-slate-600">
              Monitor parcels and keep your operations visible from booking to
              delivery.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
