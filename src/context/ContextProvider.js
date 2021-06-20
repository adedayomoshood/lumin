import { AppContextProvider } from '.';

const ContextProvider = ({ children }) => {
  const contextValues = {};

  return (
    <AppContextProvider value={contextValues}>{children}</AppContextProvider>
  );
};

export default ContextProvider;
