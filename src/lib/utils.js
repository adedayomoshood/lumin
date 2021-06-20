export const handleApiErrors = (error) => {
  let errorMessages = '';
  const { graphQLErrors, networkError } = error;
  const networkErrorsList = networkError?.result?.errors;

  if (graphQLErrors && graphQLErrors?.length) {
    for (let index = 0; index < graphQLErrors.length; index++) {
      if (typeof graphQLErrors[index] === 'string') {
        errorMessages += `${graphQLErrors[index]}\n`;
      } else {
        errorMessages += `${graphQLErrors[index].message}\n`;
      }
    }
  } else if (networkError && networkErrorsList?.length) {
    for (let index = 0; index < networkErrorsList.length; index++) {
      if (typeof networkErrorsList[index].message === 'string') {
        errorMessages += `${networkErrorsList[index].message}\n`;
      }
    }
  } else {
    errorMessages = error.message;
  }

  return errorMessages;
};

export function formatAmount(amount) {
  return (
    amount &&
    Intl.NumberFormat(navigator?.language, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  );
}
