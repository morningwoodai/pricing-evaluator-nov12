export default function Stats() {
  const items = [
    { label: "Pages Analyzed", value: "1000+" },
    { label: "Evaluation Dimensions", value: "6" },
    { label: "Average Analysis", value: "< 30s" },
  ];
  return (
    <section className="py-6">
      <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((it) => (
          <div
            key={it.label}
            className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 p-4 text-center shadow-sm"
          >
            <div className="text-2xl font-semibold text-gray-900 dark:text-white">{it.value}</div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}