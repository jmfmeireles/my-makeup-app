import { MakeupProduct, Pagination } from '../../types';

export default class Products {
  /**
   * Function called whenever the user opens the page, selects a product tag and opens a new page of products.
   * @param products
   * @param productTagsToFilter
   * @param pagination
   * @returns a page of products
   */
  static getPageOfProducts(
    products: MakeupProduct[],
    productTagsToFilter: string[],
    pagination: Pagination,
  ): MakeupProduct[] {
    //first, filter products by product tags
    let filteredAndSortedProducts: MakeupProduct[] =
      Products.filterProductsByTags(products, productTagsToFilter);

    //now, sort products by rating
    filteredAndSortedProducts = Products.sortByRating(
      filteredAndSortedProducts,
    );

    //finally, get the proper results having into account the pagination settings
    const startIndex = pagination.page * pagination.elementsPerPage;
    const endIndex =
      (pagination.page + 1) * pagination.elementsPerPage <
      pagination.numberOfPossibleResults
        ? (pagination.page + 1) * pagination.elementsPerPage
        : pagination.numberOfPossibleResults;
    return filteredAndSortedProducts.slice(startIndex, endIndex);
  }

  /**
   * Gets the number of possible results after a filtering operation
   * @param products
   * @param productTags
   * @returns the number of products after filtering
   */
  static getNumberOfProductsAfterFiltering(
    products: MakeupProduct[],
    productTags: string[],
  ): number {
    return Products.filterProductsByTags(products, productTags).length;
  }
  /**
   * Filters product catalog based on the product tags selected by the user
   * @param products
   * @param productTags
   * @returns filtered products
   */
  static filterProductsByTags(
    products: MakeupProduct[],
    productTags: string[],
  ): MakeupProduct[] {
    return productTags.length
      ? products.filter(product =>
          product.tag_list.some(tag => productTags.indexOf(tag) >= 0),
        )
      : products;
  }
  /**
   * Sorts products by rating (descendent).
   * The products with nullable rating are sorted by name
   * @param products
   * @returns sorted products, first the ones with rating and then the products with nullable rating
   */
  static sortByRating(products: MakeupProduct[]): MakeupProduct[] {
    //rating can be a null value; so, sort only the non-null values, and the products with null values will be sorted by name
    const productsWithNonNullRatings = products.filter(
      product => product.rating !== null,
    );
    productsWithNonNullRatings.sort((a: MakeupProduct, b: MakeupProduct) => {
      const ratingA: number = a.rating ? a.rating : 0;
      const ratingB: number = b.rating ? b.rating : 0;

      return ratingB - ratingA;
    });
    const productsWithNullRatings = products.filter(
      product => product.rating === null,
    );
    productsWithNullRatings.sort((a: MakeupProduct, b: MakeupProduct) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return [...productsWithNonNullRatings, ...productsWithNullRatings];
  }
  /**
   * Converts product's rating from a 0-5 scale to a 0-100
   * @param rating of the product on a 0-5 scale
   * @returns rating of the product on a 0-100 scale
   */
  static convertRatingTo100Range(rating: number | null): number {
    return rating ? (rating * 100) / 5 : 0;
  }
}
