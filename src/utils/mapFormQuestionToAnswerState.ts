import { SenctionAnswer } from "../store/evaluationSlice";
import { Form } from "../types/form";

export const mapFormQuestionToAnswerState = (
  formQuestion: Form
): SenctionAnswer[] => {
  return formQuestion.section.map((section) => {
    return {
      title: section.title,
      question: section.question.map((question) => {
        return {
          title: question.title,
          answer: "",
        };
      }),
    };
  });
};
