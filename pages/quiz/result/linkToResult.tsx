import Link from "next/link";
import { BlockType } from "../data";
import { useContext, useState, useEffect } from "react";
import { ListContext } from "../mainQuiz";
import { Typography } from "@mui/material";

export default function LinkToResult() {
  const base: BlockType[] = useContext(ListContext).base;
  const index = useContext(ListContext).index;
  const [capacity, setCapacity] = useState<number[]>([]);

  useEffect(() => {
    if (!capacity.includes(index)) {
      setCapacity([...capacity, index]);
    }
  }, [index]);

  return (
    <div>
      {(index === base.length - 1 || capacity.length === base.length) && (
        <Typography
          sx={{ backgroundColor: "black" }}
          align="center"
          variant="subtitle2"
        >
          <Link href={`/quiz/result/result`}>
            <a style={{ fontFamily: "monospace", color: "white" }}>
              get result
            </a>
          </Link>
        </Typography>
      )}
    </div>
  );
}
