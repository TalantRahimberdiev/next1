import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ListContext } from "./mainQuiz";

const Responsed: React.FC = () => {
  const base = useContext(ListContext).base;
  return (
    <Box sx={{ marginTop: "3vh" }}>
      <Typography
        sx={{ backgroundColor: "black", color: "white", mb: "2vh" }}
        fontFamily={"monospace"}
        align="center"
        variant="subtitle2"
      >
        response status
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "2vw",
        }}
      >
        {base.map((block, index) => (
          <span
            style={{
              marginRight: "3vw",
              border: "1px solid black",
              padding: "3px",
              borderRadius: "3px",
              width: "3vw",
              fontFamily: "monospace",
            }}
            key={index}
          >
            {index + 1} {block.response !== "" ? "+" : "-"}
          </span>
        ))}
      </Box>
    </Box>
  );
};

export default Responsed;
