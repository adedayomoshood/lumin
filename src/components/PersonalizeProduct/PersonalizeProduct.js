import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Img,
  Select,
  Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useFormState } from 'react-use-form-state';
import { AppDrawer } from '../';
import useAppContext from '../../context';

function PersonalizeProduct() {
  const btnRef = React.useRef();
  const { isPersonalizeOpen, onPersonalizeClose, selectedProduct, updateCart } =
    useAppContext();
  const [formState, { select }] = useFormState();

  const createHash = (product) => {
    const personalizedHash = Object.values(formState.values).filter((n) => n);
    product.selected_options = personalizedHash;

    return `${selectedProduct.hashKey}__${personalizedHash.join('__')}`;
  };

  const personalizeAndAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newSelectedProduct = Object.assign({}, selectedProduct);
    const hash = createHash(newSelectedProduct);

    newSelectedProduct.hashKey = hash;

    updateCart(newSelectedProduct);
    onPersonalizeClose();
  };

  useEffect(() => {
    !isPersonalizeOpen && formState.reset();
  }, [formState, isPersonalizeOpen]);

  return (
    <AppDrawer
      isDrawerOpen={isPersonalizeOpen}
      onDrawerClose={onPersonalizeClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay backdropFilter="blur(3px)" bg="brand.400" />
      <DrawerContent maxW="34.5rem" bg="brand.200">
        <DrawerHeader>
          <Flex flexDir="row" pt="0.75rem" mb={{ base: '2rem', md: '4.25rem' }}>
            <IconButton
              variant="outline"
              size="xs"
              onClick={onPersonalizeClose}
              fontSize="1.25rem"
              outline="none"
              isRound
              icon={<ChevronRightIcon />}
            />
            <Flex m="auto">
              <Img src={selectedProduct?.image_url} h="3.75rem" />
            </Flex>
          </Flex>
        </DrawerHeader>

        <DrawerBody>
          <Flex height="100%" flexDirection="column">
            <Heading
              fontSize={{ base: '1.5rem', md: '1.75rem' }}
              color="brand.600"
              mb="1.25rem"
              letterSpacing="1px"
            >
              First, let's personalize.
            </Heading>
            <Text
              as="p"
              fontSize={{ base: '0.8125rem', md: '1rem' }}
              color="brand.600"
              lineHeight="1.75"
              mb="1.75rem"
            >
              Products that you receive may vary according to your age bracket &
              skin type to optimize results.
            </Text>
            <Heading
              as="h6"
              fontSize="0.8125rem"
              fontFamily="medium"
              color="brand.600"
              mb="1rem"
            >
              Personalization Details
            </Heading>

            <Flex
              as="form"
              flexDirection="column"
              flex="1"
              onSubmit={personalizeAndAddToCart}
            >
              {selectedProduct?.product_options?.map((productOption, index) => (
                <FormControl mb="1rem" key={index}>
                  <FormLabel fontFamily="medium" fontSize="0.8125rem">
                    {productOption.title}
                  </FormLabel>
                  <Select
                    bg="white"
                    size="sm"
                    fontSize="0.8125rem"
                    h="2.5rem"
                    border="none"
                    variant="outline"
                    borderRadius="0"
                    required
                    focusBorderColor="none"
                    placeholder={`Select ${productOption.title}`}
                    {...select(productOption.title)}
                  >
                    {productOption?.options?.map((option) => (
                      <option value={option.value} key={option.id}>
                        {option.value}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              ))}

              <Button
                w="100%"
                h="3.25rem"
                type="submit"
                fontSize="0.75rem"
                letterSpacing="2px"
                colorScheme="brand"
                textTransform="uppercase"
                mt="auto"
                mb="0.75rem"
                alignSelf="flex-end"
                justifySelf="flex-end"
              >
                Add to Cart
              </Button>
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </AppDrawer>
  );
}

export default PersonalizeProduct;
