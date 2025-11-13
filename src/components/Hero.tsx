import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 pt-12 pb-8 md:pt-16 md:pb-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 text-xs font-medium justify-center">
          <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
            AI-Powered Intelligence
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
            Real-time Analysis
          </span>
          <span className="px-2.5 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-200">
            10x Conversion Boost
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-center text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          Pricing Page Evaluator
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Uncover hidden friction, boost clarity, and get data‑driven A/B test
          recommendations that convert browsers into buyers.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#evaluate"
            className="btn inline-flex items-center gap-2"
          >
            Analyze Now
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Example links */}
        <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
          Try examples:
          {" "}
          <a className="underline hover:no-underline" href="https://stripe.com/pricing" target="_blank" rel="noreferrer">stripe.com/pricing</a>
          {"  "}
          <a className="underline hover:no-underline" href="https://linear.app/pricing" target="_blank" rel="noreferrer">linear.app/pricing</a>
          {"  "}
          <a className="underline hover:no-underline" href="https://vercel.com/pricing" target="_blank" rel="noreferrer">vercel.com/pricing</a>
        </p>
      </div>
    </section>
  );
}