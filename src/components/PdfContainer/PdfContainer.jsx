import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  viewer: {
    flexGrow: 1,
    width: "100%",
    maxWidth: "700px",
    minHeight: "400px",
    marginTop: "16px",
  },
});

function PdfContainer({ children }) {
  return (
    <Box style={styles.container}>
      <PDFViewer style={styles.viewer}>{children}</PDFViewer>
    </Box>
  );
}

PdfContainer.propTypes = {
  children: PropTypes.node,
};

export default PdfContainer;
