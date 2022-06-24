import { useContext } from "react";
import { ListContext } from "../mainQuiz";
import MakeTable from "./f_makeTable";

const Result: React.FC = () => {
  const base = useContext(ListContext).base;

  return MakeTable(base);
};

export default Result;
