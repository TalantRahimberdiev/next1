import { OptionsType } from "./data";
import { Radio, FormControlLabel, Typography } from "@mui/material";

const CurrentOption: React.FC<OptionsType> = ({ text, checked }) => {
  return (
    <FormControlLabel
      value={text}
      control={<Radio color="success" size="small" checked={checked} />}
      label={
        <Typography fontFamily={"monospace"} variant="subtitle2">
          {text}
        </Typography>
      }
    />
  );
};

export default CurrentOption;
