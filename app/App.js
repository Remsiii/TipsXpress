import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CheckoutForm from "./subscription"


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path='checkout/' index element={<CheckoutForm />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;