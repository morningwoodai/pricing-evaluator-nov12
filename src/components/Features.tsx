export default function Features() {
  const features = [
    {
      title: "Full-Page Screenshots",
      desc: "Capture complete pricing pages with headless browser rendering, including dynamic content.",
    },
    {
      title: "Smart Extraction",
      desc: "Automatically detect pricing tiers, features, CTAs, and trust signals using AI parsing.",
    },
    {
      title: "Multi-Dimension Scoring",
      desc: "Get scored on clarity, hierarchy, contrast, trust, friction, and CTA quality.",
    },
    {
      title: "A/B Test Ideas",
      desc: "Receive 3–5 actionable recommendations with impact and effort estimates.",
    },
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white">
          Intelligence that Converts
        </h2>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-300">
          Powered by headless browsers, AI pattern recognition, and conversion psychology
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Secondary metrics */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 p-4">
            <div className="text-3xl font-semibold">92%</div>
            <div className="text-sm opacity-80">Accuracy Rate</div>
            <div className="text-sm">Precision in detecting pricing patterns</div>
          </div>
          <div className="rounded-xl bg-violet-50 dark:bg-violet-900/30 text-violet-900 dark:text-violet-100 p-4">
            <div className="text-3xl font-semibold">6</div>
            <div className="text-sm opacity-80">Key Dimensions</div>
            <div className="text-sm">Comprehensive evaluation criteria</div>
          </div>
        </div>
      </div>
    </section>
  );
}