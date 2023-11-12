export interface Form {
  title: string;
  section: Section[];
}

export interface Section {
  title: string;
  question: Question[];
}

export interface Question {
  title: string;
  type: "radio" | "checkbox" | "text";
  option: Option[];
}

export interface Option {
  title: string;
  value: string;
}
