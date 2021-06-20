import { CloseIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { QuantitySelector } from '../';
import useAppContext from '../../context';
import { formatAmount } from '../../lib/utils';

function CartItem({ product }) {
  const { updateCart, cartCurrency } = useAppContext();

  const toggleCount = (type) => {
    updateCart(product, type);
  };

  return (
    <Flex
      bg="white"
      p="1rem"
      mb="1.25rem"
      justifyContent="space-between"
      pos="relative"
    >
      <Flex
        w="calc(2/3 * 100%)"
        flexDirection="column"
        fontSize="0.625rem"
        lineHeight="1.125rem"
        color="brand.600"
        justifyContent="center"
      >
        <Heading as="h5" fontFamily="medium" fontSize="0.875rem">
          {product.title}
        </Heading>

        <Text as="p">{product?.selected_options?.join(' | ')}</Text>
        <Flex justifyContent="space-between" alignItems="center" mt="0.5rem">
          <QuantitySelector quantity={product.qty} toggleCount={toggleCount} />
          <Heading
            as="h6"
            padding="0 0.625rem"
            fontFamily="body"
            fontSize="0.875rem"
          >
            {`${cartCurrency} ${formatAmount(product.subtotal)}`}
          </Heading>
        </Flex>
      </Flex>

      <Flex w="calc(1/3 * 100%)" mr="1rem" flexDir="column" alignItems="center">
        <Img
          src={product.image_url}
          alt={product.title}
          h="5rem"
          maxW="7rem"
          objectFit="contain"
        />
      </Flex>

      <IconButton
        variant="unstyled"
        size="xs"
        fontSize="0.625rem"
        outline="none"
        boxShadow="none"
        border="none"
        isRound
        top="0.5rem"
        right="0.5rem"
        pos="absolute"
        icon={<CloseIcon />}
        onClick={() => {
          updateCart(product, 'remove');
        }}
      />
    </Flex>
  );
}

export default CartItem;
