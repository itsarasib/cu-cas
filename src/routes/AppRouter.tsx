import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import CourseListsPage from "../Pages/CourseListsPage";
import EvaluationPage from "../Pages/EvaluationPage";
import SyllabusPage from "../Pages/SyllabusPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/evaluation" element={<CourseListsPage />} />
        <Route path="/evaluation/:id" element={<EvaluationPage />} />
        <Route path="/syllabus" element={<SyllabusPage />} />
        {/* <Route path="/evaluation/:id" element={<EvaluationPage />} />
        <Route path="/evaluation/:id" element={<EvaluationPage />} />
        {/* <Route path="/evaluation" element={<EvaluationPage />} />
                <Route path="/evaluation/:id" element={<EvaluationPage />} />
                <Route path='/syllabus' element={<SyllabusPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
