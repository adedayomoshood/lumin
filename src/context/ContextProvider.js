import { AppContextProvider } from '.';
import { useDisclosure } from '@chakra-ui/react';

const ContextProvider = ({ children }) => {
  const {
    isOpen: isCartOpen,
    onOpen: openCart,
    onClose: onCartClose,
  } = useDisclosure();

  const {
    isOpen: isPersonalizeOpen,
    onOpen: openPersonalize,
    onClose: onPersonalizeClose,
  } = useDisclosure();

  const contextValues = {
    isCartOpen,
    openCart,
    onCartClose,
    isPersonalizeOpen,
    openPersonalize,
    onPersonalizeClose,
  };

  return (
    <AppContextProvider value={contextValues}>{children}</AppContextProvider>
  );
};

export default ContextProvider;
