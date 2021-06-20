import { Flex, Img, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import useAppContext from '../../context';
import cartIcon from '../../images/cart.png';
import Logo from '../../images/logo.png';

function Header() {
  const { openCart, userCart } = useAppContext();
  const [cartTotalQty, setCartTotalQty] = useState();

  useEffect(() => {
    const total = userCart?.reduce(
      (accumulator, cartItem) => cartItem.qty + accumulator,
      0,
    );
    setCartTotalQty(total);
  }, [userCart]);

  return (
    <Flex
      top="0"
      bg="brand.100"
      height="4rem"
      boxShadow="header"
      alignItems="center"
      pos="sticky"
      zIndex="sticky"
      px={{ base: '1.25rem', lg: '2.5rem' }}
    >
      <Flex alignItems="center" justifyContent="space-between" flex="1 100%">
        <Flex alignItems="center">
          <Img
            src={Logo}
            alt="Lumin"
            mr={{ base: '0', md: '4rem' }}
            objectFit="contain"
            h="3rem"
          />
        </Flex>
        <Flex alignItems="center">
          <Flex
            as="button"
            height="2.25rem"
            alignItems="center"
            onClick={openCart}
          >
            <Img src={cartIcon} alt="Cart" w="25px" />
            <Text
              as="span"
              fontSize=".8125rem"
              lineHeight={{ base: '1.7', lg: '1.5' }}
              mt="-0.5rem"
              ml="0.125rem"
            >
              {cartTotalQty ?? 0}
            </Text>
          </Flex>
          <Select
            defaultValue="en"
            size="xs"
            w="5.25rem"
            ml="1.5rem"
            borderRadius={0}
            borderColor="gray.300"
            focusBorderColor="brand.500"
            h={{ base: '1.5rem', lg: '2rem' }}
            fontSize={{ base: '.6875rem', lg: '.8125rem' }}
            _focus={{ boxShadow: 'none', borderColor: 'brand.500' }}
          >
            <option value="ar">AR</option>
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="de">DE</option>
            <option value="he">HE</option>
            <option value="id">ID</option>
            <option value="zh-TW">ZH-TW</option>
            <option value="pt">PT</option>
            <option value="th">TH</option>
            <option value="da">DA</option>
            <option value="ja">JA</option>
          </Select>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
