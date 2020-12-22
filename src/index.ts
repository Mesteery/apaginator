/**
 * Creates a new `Paginate` form a given `Array`,
 * optionally with a specific number of items per page.
 * @template T
 * @param {T[]} data The array to paginate
 * @param {number} [perPage=10] The number of items per page
 * @public
 * @class
 */
export default class Paginator<T> {
  public readonly data: T[];
  public readonly perPage: number;
  public currentPage = 0;
  public readonly totalPages: number;

  public constructor(data: T[], perPage = 10) {
    this.data = data;
    this.perPage = perPage;
    this.totalPages = Math.ceil(this.data.length / this.perPage);
  }

  /**
   * Returns `page` at the specified index.
   * @public
   * @param {number} index
   * @return {T[] | undefined}
   */
  public page(index: number): T[] | undefined {
    if (index < 0 || index > this.totalPages - 1) return undefined;

    this.currentPage = index;

    const start = this.currentPage * this.perPage;
    const end = start + this.perPage;
    return this.data.slice(start, end);
  }

  /**
   * Returns the current `page`.
   * @public
   * @return {T[] | undefined}
   */
  public current(): T[] | undefined {
    return this.page(this.currentPage);
  }

  /**
   * Returns the first `page`.
   * @public
   * @return {T[] | undefined}
   */
  public first(): T[] | undefined {
    return this.page(0);
  }

  /**
   * Returns the last `page`.
   * @public
   * @return {T[] | undefined}
   */
  public last(): T[] | undefined {
    return this.page(this.totalPages - 1);
  }

  /**
   * Returns the next `page`.
   * @public
   * @return {T[] | undefined}
   */
  public next(): T[] | undefined {
    return this.page(this.currentPage + 1);
  }

  /**
   * Returns the previous `page`.
   * @public
   * @return {T[] | undefined}
   */
  public previous(): T[] | undefined {
    return this.page(this.currentPage - 1);
  }

  /**
   * Checks if there is a next `page`.
   * @public
   * @return {boolean}
   */
  public hasNext(): boolean {
    return this.currentPage < this.totalPages - 1;
  }

  /**
   * Checks if there is a previous `page`.
   * @public
   * @return {boolean}
   */
  public hasPrevious(): boolean {
    return this.currentPage > 0;
  }
}
