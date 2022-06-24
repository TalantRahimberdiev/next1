import { useContext } from "react";
import { ListContext } from "./mainQuiz";
import { Typography, Box } from "@mui/material";

const CurrentQuestion: React.FC = () => {
  const index = useContext(ListContext).index;
  const question = useContext(ListContext).base[index].question;
  const length = useContext(ListContext).base.length;

  return (
    <Box sx={{ height: "13vh" }}>
      <Typography
        sx={{ backgroundColor: "black", color: "white" }}
        fontFamily={"monospace"}
        align="center"
        variant="subtitle2"
      >
        question:{index + 1}/{length}
      </Typography>

      <Typography fontFamily={"monospace"} variant="subtitle2" ml={1} mt={3}>
        {question}
      </Typography>
    </Box>
  );
};

export default CurrentQuestion;
