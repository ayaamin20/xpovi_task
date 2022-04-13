import "./App.css";

import LandingPage from "./Views/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Questionnaire from "./Views/Questionnaire";
import AllQuestionss from "./Views/AllQuestions";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route exact path="/questionnaire" element={<Questionnaire />} />
            <Route exact path="/allquestions" element={<AllQuestionss />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
