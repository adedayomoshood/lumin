import { Fragment } from 'react';
import {
  Cart,
  Header,
  PageTitle,
  PersonalizeProduct,
  ProductList,
} from './components';

function App() {
  return (
    <Fragment>
      <Header />
      <PageTitle />
      <ProductList />
      <PersonalizeProduct />
      <Cart />
    </Fragment>
  );
}

export default App;
