import { useLazyQuery } from '@apollo/client';
import { useDisclosure } from '@chakra-ui/react';
import { getParamByISO } from 'iso-country-currency';
import { useCallback, useEffect, useState } from 'react';
import { AppContextProvider } from '.';
import { GET_CURRENCY } from '../graphql/queries';

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

  const existingUserCurrency = localStorage.getItem('userCurrency');
  const [userCurrency, setUserCurrency] = useState(existingUserCurrency);
  const savedCurrencyList = JSON.parse(localStorage.getItem('currenciesList'));
  const [currencies, setCurrencies] = useState(savedCurrencyList || []);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cartCurrency, setCartCurrency] = useState(userCurrency);

  const existingCart = JSON.parse(localStorage.getItem('cart'));
  const [userCart, setUserCart] = useState(existingCart || []);

  const [fetchCurrencyList, { data: fetchedCurrencyList }] =
    useLazyQuery(GET_CURRENCY);

  const updateUserCurrency = (currency) => {
    localStorage.setItem('userCurrency', currency);
    setUserCurrency(currency);
  };

  const getCurrencyFromLocation = useCallback(() => {
    fetch('https://ipinfo.io/json?token=9ac1ae4e446448')
      .then((response) => response.json())
      .then((data) => {
        if (data.country) {
          updateUserCurrency(getParamByISO(data.country, 'currency'));
          return;
        }
        updateUserCurrency('USD');
      })
      .catch(() => {
        updateUserCurrency('USD');
      });
  }, []);

  const selectProduct = (product) => {
    setSelectedProduct(product);
    product?.product_options?.length ? openPersonalize() : updateCart(product);
  };

  const updateCart = (product, type = 'add') => {
    let updatedCart = [...userCart];

    const index = userCart.findIndex(
      (cartItem) => cartItem.hashKey === product.hashKey,
    );

    if (userCart[index]) {
      switch (type) {
        case 'remove':
          updatedCart.splice(index, 1);
          break;
        case 'subtract':
          if (updatedCart[index].qty > 1) {
            updatedCart[index].qty = updatedCart[index].qty - 1;
            updatedCart[index].subtotal =
              updatedCart[index].qty * updatedCart[index].price;
          } else {
            updatedCart.splice(index, 1);
          }
          break;
        default:
          updatedCart[index].qty = updatedCart[index].qty + 1;
          updatedCart[index].subtotal =
            updatedCart[index]?.qty * updatedCart[index]?.price;
      }
    } else {
      product['subtotal'] = product.price;
      updatedCart = [...userCart, product];
    }

    setUserCart(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    openCart();
  };

  const updateCartPrices = (products, productCurrency) => {
    setCartCurrency(productCurrency);

    const newCart = [...userCart];

    for (let i = 0; i < newCart.length; i++) {
      const cartItemIndex = products.findIndex(
        (product) => product.id === newCart[i].prodId,
      );

      newCart[i].price = products[cartItemIndex].price;
      newCart[i].subtotal = newCart[i].qty * newCart[i].price;
    }

    setUserCart(newCart);

    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  useEffect(() => {
    !existingUserCurrency && getCurrencyFromLocation();
  }, [existingUserCurrency, getCurrencyFromLocation]);

  useEffect(() => {
    if (!savedCurrencyList) {
      fetchCurrencyList();
    }
  }, [savedCurrencyList, fetchCurrencyList]);

  useEffect(() => {
    if (fetchedCurrencyList) {
      localStorage.setItem(
        'currenciesList',
        JSON.stringify(fetchedCurrencyList?.currency),
      );
      setCurrencies(fetchedCurrencyList?.currency);
    }
  }, [fetchedCurrencyList, setCurrencies]);

  const contextValues = {
    currencies,
    userCurrency,
    updateUserCurrency,

    isPersonalizeOpen,
    openPersonalize,
    onPersonalizeClose,

    isCartOpen,
    openCart,
    onCartClose,

    updateCart,
    userCart,
    updateCartPrices,
    cartCurrency,

    selectedProduct,
    selectProduct,
  };

  return (
    <AppContextProvider value={contextValues}>{children}</AppContextProvider>
  );
};

export default ContextProvider;
