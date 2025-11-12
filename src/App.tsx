import "./index.css";
import PricingForm from "./components/PricingForm";
import HealthCheck from "./components/HealthCheck";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="p-5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-indigo-700 dark:to-purple-700 text-white text-center shadow-md transition-colors duration-300">
        <h1 className="text-3xl md:text-4xl font-semibold">
          💡 Pricing Evaluator
        </h1>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 p-6 md:p-10">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-xl p-6 transition-all duration-300 text-gray-900 dark:text-gray-100">
          <HealthCheck />
        </div>
        <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-xl p-6 transition-all duration-300 text-gray-900 dark:text-gray-100">
          <PricingForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        © {new Date().getFullYear()} Morningwood AI
      </footer>

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
}