import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(() => ({
  width: "100%",
  maxWidth: "250px",
}));

const Btn = ({ text, type = "submit" }) => {
  return (
    <StyledButton type={type} variant="contained">
      {text}
    </StyledButton>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Btn;
