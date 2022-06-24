import { useContext, useEffect } from "react";
import { ListContext } from "./mainQuiz";
import { OptionsType } from "./data";
import CurrentOption from "./currentOption";
import updateBase from "./updateBase";

import { RadioGroup, FormControl } from "@mui/material";

const Options: React.FC = () => {
  const index = useContext(ListContext).index;
  const options = useContext(ListContext).base[index].options;
  const setSelected = useContext(ListContext).setSelected;
  const base = useContext(ListContext).base;
  const setBase = useContext(ListContext).setBase;
  const question = base[index].question;
  const selected = useContext(ListContext).selected;

  const select = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateBase(base, event.target.value, setBase, index);
    setSelected(event.target.value);
  };

  useEffect(() => {
    updateBase(base, selected, setBase, index);
  }, [selected]);

  return (
    <FormControl sx={{marginBottom:'3vh'}}>
      <RadioGroup sx={{ paddingLeft: 2 }} name={question} onChange={select}>
        {options.map((option: OptionsType, index: number) => (
          <CurrentOption
            key={index}
            text={option.text}
            checked={option.checked}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Options;
