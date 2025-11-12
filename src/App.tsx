import "./index.css"
import PricingForm from "./components/PricingForm"
import HealthCheck from "./components/HealthCheck"

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 space-y-8">
      <HealthCheck />
      <PricingForm />
    </div>
  )
}

export default App
