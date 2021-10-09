import React from 'react';

import { MakeupProduct } from '../../types';
import {
  ProductWrapper,
  Panel,
  Name,
  Price,
  ColorSection,
  Color,
  RatingWrapper,
  Rating,
} from './style';
import Products from '../../resources/helpers/Products';
import ProductImageAndModal from './ProductImageAndModal';

export default function Product(props: { product: MakeupProduct }) {
  return (
    <ProductWrapper>
      <a
        href={`http://makeup-api.herokuapp.com/api/v1/products/${props.product.id}`}
      >
        <Panel>
          <ProductImageAndModal {...props} />
          <RatingWrapper>
            <Rating
              valueLabelDisplay="auto"
              step={10}
              value={Products.convertRatingTo100Range(props.product.rating)}
            />
          </RatingWrapper>
          <ColorSection>
            <>
              {props.product.product_colors.map((color, index) => (
                <Color
                  key={`${props.product.id}-${color.hex_value}-${index}`}
                  color={color.hex_value}
                />
              ))}
            </>
          </ColorSection>
          <Name>{props.product.name}</Name>
          <Price>
            {props.product.price_sign}
            {props.product.price}
          </Price>
        </Panel>
      </a>
    </ProductWrapper>
  );
}
