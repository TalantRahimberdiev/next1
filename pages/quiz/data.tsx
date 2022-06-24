export type OptionsType = {
  text: string;
  checked: boolean;
};

export type BlockType = {
  question: string;
  options: OptionsType[];
  correctAnswer: string;
  response: string;
  score: boolean;
};

const data: BlockType[] = [
  {
    question: "function getStaticPaths(){}",
    options: [
      { text: "finds paths", checked: false },
      { text: "provides dynamic routes", checked: false },
      { text: "same as get static props", checked: false },
    ],
    correctAnswer: "dynamic routes",
    response: "",
    score: false,
  },
  {
    question: `use Effect()`,
    options: [
      { text: "server-side-rendering", checked: false },
      { text: "static-site-generation", checked: false },
      { text: "client-side-rendering", checked: false },
    ],
    correctAnswer: "client-side-rendering",
    response: "",
    score: false,
  },
  {
    question: "react is:",
    options: [
      { text: "framework", checked: false },
      { text: "libriary", checked: false },
      { text: "language", checked: false },
    ],
    correctAnswer: "libriary",
    response: "",
    score: false,
  },
  {
    question: "ThemeProvider in MUI:",
    options: [
      { text: "styled", checked: false },
      { text: "createTheme", checked: false },
      { text: "global css overrides", checked: false },
    ],
    correctAnswer: "createTheme",
    response: "",
    score: false,
  },
  {
    question: "to avoid props drilling:",
    options: [
      { text: "useContext()", checked: false },
      { text: "useReducer()", checked: false },
      { text: "useTransition()", checked: false },
    ],
    correctAnswer: "useContext()",
    response: "",
    score: false,
  },
];

export default data;
