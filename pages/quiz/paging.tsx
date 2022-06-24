import { useContext } from "react";
import { ListContext } from "./mainQuiz";
import { Button, Box, Stack, Pagination } from "@mui/material";

export type NextPrevType = {
  next: (e: React.MouseEvent<HTMLButtonElement>) => void;
  prev: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Paging: React.FC = () => {
  const index = useContext(ListContext).index;
  const setIndex = useContext(ListContext).setIndex;
  const length = useContext(ListContext).base.length;

  const nextPrev: NextPrevType = {
    next: (e) => {
      e.preventDefault();
      index < length - 1 ? setIndex(index + 1) : setIndex(0);
    },
    prev: (e) => {
      e.preventDefault();
      index === 0 ? setIndex(length - 1) : setIndex(index - 1);
    },
  };

  const changePage = (e: any, value: number) => setIndex(value - 1);

  return (
    <Box>
      <Box mb={1} sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          size="small"
          variant={"outlined"}
          color={"success"}
          onClick={nextPrev.prev}
        >
          prev
        </Button>
        <Button
          size="small"
          variant={"outlined"}
          color={"success"}
          onClick={nextPrev.next}
        >
          next
        </Button>
      </Box>
      <Stack spacing={2}>
        <Pagination
          page={index + 1}
          onChange={changePage}
          sx={{ m: "auto" }}
          size={"small"}
          count={length}
          color="standard"
        />
      </Stack>
    </Box>
  );
};

export default Paging;
