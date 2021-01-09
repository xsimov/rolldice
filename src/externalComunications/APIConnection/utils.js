const getSocketURL = () => {
  const { NODE_ENV } = process.env;
  return NODE_ENV === 'production'
    ? 'https://sw.xsimov.com'
    : 'http://localhost:3000';
};

export { getSocketURL };
