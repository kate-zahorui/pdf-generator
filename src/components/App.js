import { ContentContainer, Form, PdfContainer, PdfDocument } from "./";
import * as api from "../services/api";
import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGeneratePDF = (text) => {
    fetchQRCode(text);
  };

  async function fetchQRCode(text) {
    try {
      setIsLoading(true);
      setError("");

      const response = await api.getQRCode(text);

      if (response.url) {
        setImage(response.url);
        return;
      }
      await Promise.reject(
        new Error(`Sorry, we can't generate QR-code from your string`)
      );
      return;
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const showPDF = !isLoading && image;
  return (
    <ContentContainer>
      <Form onSubmit={handleGeneratePDF} />
      {error && <div>Error: {error}</div>}
      {isLoading && <div>Loading...</div>}
      {showPDF && (
        <PdfContainer>
          <PdfDocument image={image} />
        </PdfContainer>
      )}
    </ContentContainer>
  );
}

export default App;
