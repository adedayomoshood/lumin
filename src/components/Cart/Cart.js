import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { AppDrawer, CartItem, CurrencySelector } from '../';
import useAppContext from '../../context';
import { formatAmount } from '../../lib/utils';

function Cart() {
  const { isCartOpen, onCartClose, cartCurrency } = useAppContext();
  const btnRef = React.useRef();
  const { userCart } = useAppContext();
  const [cartTotalPrice, setCartTotalPrice] = useState();

  useEffect(() => {
    const total = userCart?.reduce(
      (accumulator, cartItem) => cartItem.subtotal + accumulator,
      0,
    );
    setCartTotalPrice(total);
  }, [userCart]);

  return (
    <AppDrawer
      isDrawerOpen={isCartOpen}
      onDrawerClose={onCartClose}
      finalFocusRef={btnRef}
    >
      <DrawerHeader>
        <Flex flexDir="row" pt="0.75rem">
          <IconButton
            variant="outline"
            size="xs"
            onClick={onCartClose}
            fontSize="20px"
            outline="none"
            isRound
            icon={<ChevronRightIcon />}
          />
          <Heading
            as="h4"
            flex="1 100%"
            color="#696969"
            fontSize="0.625rem"
            lineHeight="1.2"
            letterSpacing="1px"
            alignSelf="center"
            fontFamily="medium"
            justifySelf="center"
            textAlign="center"
          >
            YOUR CART
          </Heading>
        </Flex>
        <Flex flexDir="row" pt="0.75rem">
          <CurrencySelector />
        </Flex>
      </DrawerHeader>

      <DrawerBody py="0">
        {userCart?.length ? (
          userCart.map((item) => (
            <Fragment key={item.hashKey}>
              <CartItem product={item} />
            </Fragment>
          ))
        ) : (
          <Text as="p" textAlign="center" fontSize="1rem">
            There are no items in your cart.
          </Text>
        )}
      </DrawerBody>

      {userCart?.length !== 0 && (
        <DrawerFooter
          borderTop="1px solid #d0d0d0"
          boxShadow="0 -4px 12px rgba(0, 0, 0, 0.15)"
        >
          <Flex flexDirection="column" flex="1 100%">
            <Flex
              alignItems="center"
              justifyContent="space-between"
              py="0.5rem"
              mb="0.5rem"
            >
              <Text as="h5">Subtotal</Text>
              <Text
                as="h6"
                fontSize="1rem"
                fontFamily="medium"
                lineHeight="1.5"
              >
                {`${cartCurrency} ${formatAmount(cartTotalPrice)}`}
              </Text>
            </Flex>
            <Button
              w="100%"
              h="3.25rem"
              fontSize="0.75rem"
              letterSpacing="2px"
              colorScheme="brand"
              textTransform="uppercase"
            >
              Proceed to checkout
            </Button>
          </Flex>
        </DrawerFooter>
      )}
    </AppDrawer>
  );
}

export default Cart;
