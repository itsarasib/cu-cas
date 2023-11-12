import { Form, Section } from "../types/form";

const courseSection: Section = {
  title: "Course",
  question: [
    {
      title: "Is this course application to the real life situation",
      type: "radio",
      option: [
        {
          title: "Yes",
          value: "yes",
        },
        {
          title: "No",
          value: "no",
        },
      ],
    },
    {
      title:
        "How well the professor illustrate knowledge to student in the class",
      type: "radio",
      option: [
        {
          title: "Very well",
          value: "very-well",
        },
        {
          title: "Well",
          value: "well",
        },
        {
          title: "Average",
          value: "average",
        },
        {
          title: "Poor",
          value: "poor",
        },
        {
          title: "Very poor",
          value: "very-poor",
        },
      ],
    },
    {
      title: "Feedback about the course",
      type: "text",
      option: [],
    },
  ],
};

const professorSection: Section = {
  title: "Professor",
  question: [
    {
      title:
        "How well the professor illustrate knowledge to student in the class",
      type: "radio",
      option: [
        {
          title: "Very well",
          value: "very-well",
        },
        {
          title: "Well",
          value: "well",
        },
        {
          title: "Average",
          value: "average",
        },
        {
          title: "Poor",
          value: "poor",
        },
        {
          title: "Very poor",
          value: "very-poor",
        },
      ],
    },
    {
      title: "Feedback for professor",
      type: "text",
      option: [],
    },
  ],
};

const usefulnessSection: Section = {
  title: "Usefulness",
  question: [
    {
      title: "Is this course application to the real life situation",
      type: "radio",
      option: [
        {
          title: "Yes",
          value: "yes",
        },
        {
          title: "No",
          value: "no",
        },
      ],
    },
    {
      title: "Any thing to improve about the course",
      type: "text",
      option: [],
    },
  ],
};

export const mockForm: Form = {
  title: "Ice Capstone ",
  section: [courseSection, professorSection, usefulnessSection],
};
