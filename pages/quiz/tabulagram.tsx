import { useContext, useEffect, useState } from "react";
import { ListContext } from "./mainQuiz";
import {
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@mui/material";

export type BlockIndex = {
  question: string;
  index: number;
};

const Tabulagram = () => {
  const index = useContext(ListContext).index;
  const base = useContext(ListContext).base;
  const [tabulagram, setTabulagram] = useState<BlockIndex[]>([]);

  useEffect(() => {
    const valid = tabulagram.some(
      (block) => block.question === base[index].question
    );
    if (tabulagram.length < base.length && valid === false)
      setTabulagram([
        ...tabulagram,
        {
          question: base[index].question,
          index: index,
        },
      ]);
  }, [index]);

  return (
    <List sx={{ padding: "0" }}>
      <Typography
        sx={{ backgroundColor: "black", color: "white" }}
        fontFamily={"monospace"}
        align="center"
        variant="subtitle2"
      >
        current state
      </Typography>
      {tabulagram.map((block, i) => {
        return (
          <div key={i}>
            <ListItem
              style={
                block.index === index
                  ? { color: "green", paddingLeft: "1rem" }
                  : { color: "black", paddingLeft: "1rem" }
              }
            >
              <ListItemText>
                <Typography fontFamily={"monospace"} variant="subtitle2">
                  {block.index + 1}:{` `}
                  {block.question} <br />
                  response:
                  {index === block.index
                    ? base[index].response
                    : base[block.index].response}
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider key={i} />
          </div>
        );
      })}
    </List>
  );
};

export default Tabulagram;
