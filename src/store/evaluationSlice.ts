import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EvaluationState {
  result: SenctionAnswer[];
}

export interface SenctionAnswer {
  title: string;
  question: QuestionAnswer[];
}

interface QuestionAnswer {
  title: string;
  answer: string;
}

const initialState: EvaluationState = {
  result: [],
};

export const evaluationSlice = createSlice({
  name: "evaluation",
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{
        section: number;
        questionNo: number;
        answer: string;
      }>
    ) => {
      const { section, questionNo, answer } = action.payload;
      console.log("updating");
      console.log(action.payload);
      state.result[section].question[questionNo].answer = answer;
    },
    initialize: (state, action: PayloadAction<SenctionAnswer[]>) => {
      state.result = action.payload;
    },
  },
});

export const { update, initialize } = evaluationSlice.actions;
export default evaluationSlice;
