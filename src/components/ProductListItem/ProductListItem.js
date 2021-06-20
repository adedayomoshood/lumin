import { Button, Flex, Img, Skeleton, Text } from '@chakra-ui/react';
import { useState } from 'react';
import useAppContext from '../../context';
import { formatAmount } from '../../lib/utils';

function ProductListItem({ title, currency, price, image_url, product }) {
  const { selectProduct } = useAppContext();
  const [imageLoaded, setImageLoaded] = useState(false);

  const productPayload = {
    hashKey: product.id.toString(),
    qty: 1,
    image_url: product.image_url,
    price: product.price,
    product_options: product.product_options,
    title: product.title,
    prodId: product.id,
  };

  return (
    <Flex
      alignItems="center"
      textAlign="center"
      justifyContent="space-between"
      flexDirection="column"
      w={{ base: 'calc(100%/2)', md: 'calc(100%/3)' }}
      p={{ base: '2.5rem 1rem', md: '3rem 2rem' }}
    >
      <Flex
        as="button"
        flexDirection="column"
        alignItems="center"
        w="100%"
        onClick={() => selectProduct(productPayload)}
      >
        <Img
          src={image_url}
          alt={title}
          w="90%"
          maxW="12.5rem"
          maxH="100%"
          display={!imageLoaded ? 'none' : 'block'}
          objectFit="contain"
          height={{ base: '6.25rem', md: '10.625rem' }}
          onLoad={() => setImageLoaded(true)}
        />

        <Skeleton
          w="90%"
          maxW="12.5rem"
          maxH="100%"
          display={imageLoaded ? 'none' : 'block'}
          height={{ base: '6.25', md: '10.625rem' }}
          startColor="gray.500"
          endColor="gray.300"
        />

        <Text
          as="h3"
          mt="1.25rem"
          mb="0.5rem"
          fontSize={{ base: '0.8125rem', lg: '1rem' }}
          lineHeight={{ base: '1.7', lg: '1.5' }}
        >
          {title}
        </Text>
      </Flex>

      <Text
        as="p"
        mt="0.5rem"
        fontSize={{ base: '0.8125rem', lg: '1rem' }}
        lineHeight={{ base: '1.7', lg: '1.5' }}
      >
        {currency} {formatAmount(price)}
      </Text>
      <Button
        colorScheme="brand"
        fontSize="0.875rem"
        w="100%"
        h="50px"
        maxW={{ base: '15rem', lg: '10rem' }}
        mt="0.5rem"
        mx="auto"
        onClick={() => selectProduct(productPayload)}
      >
        Add to Cart
      </Button>
    </Flex>
  );
}

export default ProductListItem;
