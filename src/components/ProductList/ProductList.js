import { useQuery } from '@apollo/client';
import { Box, Container, Flex, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ProductListItem, ProductListItemSkeleton } from '..';
import useAppContext from '../../context';
import { GET_PRODUCTS } from '../../graphql/queries';

function ProductList() {
  const { userCurrency, updateCartPrices, cartCurrency, updateUserCurrency } =
    useAppContext();
  const [productCurrency, setProductCurrency] = useState(userCurrency);
  const [products, setProducts] = useState([]);
  const [productSkeleton] = useState([1, 2, 3, 4, 5, 6]);
  const toast = useToast();

  const {
    data: productList,
    loading: productListLoading,
    error: productListError,
  } = useQuery(GET_PRODUCTS, {
    variables: { currency: userCurrency },
    onError(error) {
      updateUserCurrency(productCurrency);
      toast.closeAll();
      toast({
        title: error?.message ?? 'There was an error fetching products',
        duration: 9000,
        status: 'error',
        isClosable: true,
        position: 'top-right',
      });
      return;
    },
    onCompleted() {
      setProducts(productList?.products);
    },
  });

  useEffect(() => {
    cartCurrency !== productCurrency &&
      updateCartPrices(products, productCurrency);
  }, [cartCurrency, productCurrency, products, updateCartPrices]);

  useEffect(() => {
    !productListLoading &&
      !productListError &&
      userCurrency !== productCurrency &&
      setProductCurrency(userCurrency);
  }, [productCurrency, productListError, productListLoading, userCurrency]);

  return (
    <Box bg="brand.300" minH="30rem">
      <Container px={{ base: '1rem', md: '0' }}>
        <Flex flexWrap="wrap">
          {productListLoading &&
            !products.length &&
            productSkeleton?.map((i) => <ProductListItemSkeleton key={i} />)}

          {products?.map((product) => (
            <ProductListItem
              product={product}
              key={product.id}
              id={product.id}
              title={product.title}
              currency={productCurrency}
              price={product.price}
              image_url={product.image_url}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}

export default ProductList;
