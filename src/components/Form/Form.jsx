import { useState } from "react";
import { nanoid } from "nanoid";
import { Box, InputLabel, OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Btn } from "../";

const StyledForm = styled(Box)(() => ({
  maxWidth: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media screen and (min-width: 768px)": {
    maxWidth: "500px",
  },
}));

const Form = () => {
  const [input, setInput] = useState("");
  const inputId = nanoid();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <StyledForm component="form" action="">
      <InputLabel htmlFor={inputId} sx={{ marginBottom: 2 }}>
        Enter a string to generate the QR-code
      </InputLabel>
      <OutlinedInput
        id={inputId}
        type="text"
        name="text"
        placeholder="Type here..."
        required
        value={input}
        onChange={handleInputChange}
        fullWidth
        sx={{ marginBottom: 4 }}
      />

      <Btn text="Generate" />
    </StyledForm>
  );
};

export default Form;
