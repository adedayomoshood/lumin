import { Flex, Skeleton } from '@chakra-ui/react';

function ProductListItemSkeleton({ ...rest }) {
  return (
    <Flex
      alignItems="center"
      textAlign="center"
      justifyContent="space-between"
      flexDirection="column"
      w={{ base: 'calc(100%/2)', md: 'calc(100%/3)' }}
      p={{ base: '2.5rem 1rem', md: '3rem 2rem' }}
      {...rest}
    >
      <Flex flexDirection="column" alignItems="center" w="100%">
        <Skeleton
          w="90%"
          maxH="100%"
          maxW="12.5rem"
          height={{ base: '100px', md: '170px' }}
          startColor="gray.500"
          endColor="gray.300"
        />
        <Skeleton
          w="90%"
          mt="1.25rem"
          mb="0.5rem"
          maxW="12.5rem"
          maxH="100%"
          fontSize={{ base: '0.8125rem', lg: '1rem' }}
          h={{ base: '1.5rem' }}
          startColor="gray.500"
          endColor="gray.300"
        />
      </Flex>
      <Skeleton
        w="80%"
        mt="0.5rem"
        mb="0.5rem"
        maxW="12rem"
        fontSize={{ base: '0.8125rem', lg: '1rem' }}
        h={{ base: '1.5rem' }}
        startColor="gray.500"
        endColor="gray.300"
      />
      <Skeleton
        w="80%"
        h="40px"
        mx="auto"
        mt="0.5rem"
        maxW={{ base: '15rem', lg: '10rem' }}
        startColor="gray.500"
        endColor="gray.300"
      />
    </Flex>
  );
}

export default ProductListItemSkeleton;
