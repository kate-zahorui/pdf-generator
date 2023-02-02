const { REACT_APP_API_URL } = process.env;

export const getQRCode = async (data) => {
  const result = await fetch(`${REACT_APP_API_URL}/${data}`, {});
  return result;
};
