import { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Box, InputLabel, OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Btn } from "../";

const StyledForm = styled(Box)(() => ({
  flexShrink: 0,
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media screen and (min-width: 768px)": {
    maxWidth: "500px",
  },
}));

const Form = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const inputId = nanoid();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(input);
    setInput("");
  };

  return (
    <StyledForm component="form" action="" onSubmit={handleSubmit}>
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
