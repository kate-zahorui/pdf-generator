import { Box } from "@mui/material";
import Spinner from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <Box sx={{ padding: 10 }}>
      <Spinner
        color="#1976d2"
        loading
        size={150}
        aria-label="Loading Spinner"
        speedMultiplier={0.7}
      />
    </Box>
  );
};

export default Loader;
