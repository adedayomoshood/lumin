import { Select } from '@chakra-ui/react';
import { Fragment, useEffect, useState } from 'react';
import useAppContext from '../../context';

function CurrencySelector() {
  const { userCurrency, currencies, updateUserCurrency } = useAppContext();
  const [currency, setCurrency] = useState({});

  useEffect(() => {
    setCurrency(userCurrency);
  }, [userCurrency, currency]);

  return (
    <Fragment>
      {currencies?.length && Array.isArray(currencies) ? (
        <Select
          bg="white"
          size="sm"
          h="28px"
          maxW="5rem"
          border="none"
          variant="outline"
          borderRadius="0"
          focusBorderColor="none"
          defaultValue={userCurrency}
          onChange={(e) => updateUserCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </Select>
      ) : (
        ''
      )}
    </Fragment>
  );
}

export default CurrencySelector;
