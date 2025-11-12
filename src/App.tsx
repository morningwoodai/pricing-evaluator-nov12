import "./index.css";
import PricingForm from "./components/PricingForm";
import HealthCheck from "./components/HealthCheck";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center shadow-md">
        <h1 className="text-3xl md:text-4xl font-semibold">
          💡 Pricing Evaluator
        </h1>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 p-6 md:p-10 bg-gray-50">
        <div className="w-full max-w-md bg-white shadow-lg hover:shadow-xl rounded-xl p-6 transition-shadow duration-300">
          <HealthCheck />
        </div>
        <div className="w-full max-w-md bg-white shadow-lg hover:shadow-xl rounded-xl p-6 transition-shadow duration-300">
          <PricingForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500 text-sm bg-gray-100">
        © {new Date().getFullYear()} Morningwood AI
      </footer>
      <ThemeToggle />
    </div>
  );
}
