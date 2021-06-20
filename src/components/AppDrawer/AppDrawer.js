import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';

function AppDrawer({ isDrawerOpen, onDrawerClose, finalFocusRef, children }) {
  return (
    <Drawer
      isOpen={isDrawerOpen}
      placement="right"
      onClose={onDrawerClose}
      finalFocusRef={finalFocusRef}
      closeOnEsc={false}
      closeOnOverlayClick={false}
      maxWidth="34.5rem"
      autoFocus={false}
      size="md"
    >
      <DrawerOverlay backdropFilter="blur(1.5px)" bg="brand.400" />
      <DrawerContent maxW="34.5rem" bg="brand.200">
        {children}
      </DrawerContent>
    </Drawer>
  );
}

export default AppDrawer;
