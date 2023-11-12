import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import CourseListsPage from "../Pages/CourseListsPage";
import EvaluationPage from "../Pages/EvaluationPage";
import UnAuthorizePage from "../Pages/UnauthorizePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/evaluation" element={<CourseListsPage />} />
        <Route path="/evaluation/:id" element={<EvaluationPage />} />
        <Route path="/unauthorized" element={<UnAuthorizePage />} />
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
