import { BlockType } from "./data";

const updateBase = (
  param: BlockType[],
  target: string,
  setBase: Function,
  index: number
) => {
  setBase(
    param.map((block, i) => {
      return {
        question: block.question,
        options: block.options.map((option) => {
          if (i === index) {
            return {
              text: option.text,
              checked: option.text === target,
            };
          } else {
            return {
              text: option.text,
              checked: option.checked,
            };
          }
        }),
        correctAnswer: block.correctAnswer,
        response: i === index ? target : block.response,
        score: block.correctAnswer === block.response,
      };
    })
  );
};

export default updateBase;
