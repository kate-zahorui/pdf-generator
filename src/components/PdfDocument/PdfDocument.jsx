import { Page, View, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
  },
  document: {
    width: "100%",
  },
  page: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    padding: 50,
    flexGrow: 1,
    alignItems: "center",
  },
  image: {
    width: "50%",
  },
});

const PdfDocument = ({ image }) => (
  <Document style={styles.document}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image src={image} style={styles.image} />
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
