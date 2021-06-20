import { gql } from '@apollo/client';

export const GET_CURRENCY = gql`
  query getCurrency {
    currency
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts($currency: Currency!) {
    products {
      id
      image_url
      title
      price(currency: $currency)
      product_options {
        title
        prefix
        suffix
        options {
          id
          value
        }
      }
    }
  }
`;
