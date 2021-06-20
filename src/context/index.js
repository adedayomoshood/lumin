import React, { useContext } from 'react';
const AppContext = React.createContext({});

export const AppContextProvider = AppContext.Provider;

function useAppContext() {
  return useContext(AppContext);
}

export default useAppContext;
