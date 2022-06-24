import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { BlockType } from "../data";

const MakeTable: React.FC<BlockType[]> = (param: BlockType[]) => {
  const sheet = param.map((block) => {
    return {
      question: block.question,
      correctAnswer: block.correctAnswer,
      response: block.response,
      score: block.correctAnswer === block.response ? 1 : 0,
    };
  });

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      square={true}
      variant={"outlined"}
      sx={{ border: "1px solid black" }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: "black" }}>
          <TableRow>
            {Object.keys(param[0])
              .filter((key) => key !== "options")
              .map((key, i) => {
                return key !== "score" ? (
                  <TableCell
                    align="center"
                    sx={{
                      color: "white",
                      borderRight: "1px solid white",
                      py: "0",
                      fontFamily: "monospace",
                    }}
                    key={i}
                  >
                    {key}
                  </TableCell>
                ) : (
                  <TableCell
                    align="center"
                    sx={{
                      color: "white",
                      py: "0",
                      fontFamily: "monospace",
                    }}
                    key={i}
                  >
                    {key}
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {sheet.map((block, index) => {
            return (
              <TableRow key={index}>
                {Object.values(block).map((element, i) => {
                  return i === 0 ? (
                    <TableCell
                      align="left"
                      style={{ width: "25vw", fontFamily: "monospace" }}
                      key={i}
                    >
                      {element}
                    </TableCell>
                  ) : (
                    <TableCell
                      align="center"
                      style={{ width: "5vw", fontFamily: "monospace" }}
                      key={i}
                    >
                      {element}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MakeTable;
