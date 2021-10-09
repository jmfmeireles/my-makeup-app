import React from 'react';

import { useSelector } from 'react-redux';

import { MakeupProduct } from '../../types';
import { getProductsToShow } from '../../selectors';
import Product from './Product';
import { ProductsSection } from './style';

export default function List() {
  const products: MakeupProduct[] = useSelector(getProductsToShow);

  return (
    <ProductsSection>
      <>
        {products.map((product: MakeupProduct) => (
          <Product key={product.id} product={product} />
        ))}
      </>
    </ProductsSection>
  );
}
