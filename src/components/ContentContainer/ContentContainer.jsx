import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)(() => ({
  maxWidth: "480px",
  padding: "40px 15px",
  "@media screen and (min-width: 768px)": {
    maxWidth: "768px",
  },
  "@media screen and (min-width: 1280px)": {
    maxWidth: "1280vw",
  },
}));

const ContentContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

ContentContainer.propTypes = {
  children: PropTypes.node,
};

export default ContentContainer;
