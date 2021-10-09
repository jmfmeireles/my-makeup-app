const PRODUCT_TAGS = 'productTags';

export default class SessionStorage {
  static getProductTags(): string[] {
    const stringifiedProductTags: string | null =
      sessionStorage.getItem(PRODUCT_TAGS);
    return stringifiedProductTags ? JSON.parse(stringifiedProductTags) : [];
  }

  static setProductTags(productTags: string[]) {
    sessionStorage.setItem(PRODUCT_TAGS, JSON.stringify(productTags));
  }

  static clearProductTags() {
    sessionStorage.removeItem(PRODUCT_TAGS);
  }
}
