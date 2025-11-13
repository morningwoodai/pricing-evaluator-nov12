import "./index.css";
import PricingForm from "./components/PricingForm";
import HealthCheck from "./components/HealthCheck";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Top gradient header strip for visual continuity */}
      <header className="h-14 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-indigo-700 dark:to-purple-700 shadow-md" />

      {/* Landing sections */}
      <Hero />
      <Stats />
      <Features />

      {/* Evaluator section */}
      <section id="evaluate" className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-xl p-6 transition-all duration-300">
            <HealthCheck />
          </div>
          <div className="w-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-xl p-6 transition-all duration-300">
            <PricingForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        © {new Date().getFullYear()} Morningwood AI
      </footer>

      {/* Floating Theme Toggle */}
      <ThemeToggle />
    </div>
  );
}