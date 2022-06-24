import React, { useState, createContext } from "react";
import { Grid } from "@mui/material";

import data from "./data";
import { BlockType } from "./data";

import CurrentQuestion from "./currentQuestion";
import Options from "./options";
import Paging from "./paging";
import LinkToResult from "./result/linkToResult";
import Tabulagram from "./tabulagram";
import Responsed from "./responsed";

export type ContextType = {
  base: BlockType[];
  setBase: (base: BlockType[]) => void;
  index: number;
  setIndex: (index: number) => void;
  selected: string;
  setSelected: (str: string) => void;
};

export const ListContext = createContext<ContextType>({
  base: data,
  setBase: () => {},
  index: 0,
  setIndex: () => {},
  selected: "",
  setSelected: () => {},
});

const List: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [base, setBase] = useState<BlockType[]>(data);
  const [selected, setSelected] = useState<string>("");

  return (
    <ListContext.Provider
      value={{ base, setBase, index, setIndex, selected, setSelected }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <CurrentQuestion />
          <Options />
          <Paging />
          <Responsed />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Tabulagram />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <LinkToResult />
        </Grid>
      </Grid>
    </ListContext.Provider>
  );
};

export default List;
