import { Button, HStack, Input } from '@chakra-ui/react';

function QuantitySelector({ quantity, toggleCount }) {
  return (
    <HStack
      spacing="0"
      maxW="4.75rem"
      border="1px solid #bcbcbc"
      padding="0.4375rem 0.1875rem"
      alignItems="stretch"
    >
      <Button
        variant="unstyled"
        h="auto"
        fontSize="1rem"
        minW="auto"
        p="0 0.25rem"
        _focus={{ boxShadow: 'none', borderColor: 'brand.500' }}
        onClick={() => toggleCount('subtract')}
      >
        -
      </Button>
      <Input
        type="number"
        readOnly
        value={quantity}
        size="xs"
        p="0"
        minW="0"
        w="auto"
        variant="unstyled"
        fontSize="0.8125rem"
        textAlign="center"
        cursor="auto"
      />
      <Button
        variant="unstyled"
        h="auto"
        fontSize="1rem"
        minW="auto"
        p="0 0.25rem"
        _focus={{ boxShadow: 'none', borderColor: 'brand.500' }}
        onClick={() => toggleCount('add')}
      >
        +
      </Button>
    </HStack>
  );
}

export default QuantitySelector;
