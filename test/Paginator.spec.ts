import Paginator from '../src';

const fakeData = Array.from(Array(20).keys());

test('paginator.page() returns the page at the specified index', () => {
  const paginator = new Paginator(fakeData, 5);
  const page = paginator.page(2);
  expect(page).toEqual([10, 11, 12, 13, 14]);
});

test('paginator.page() returns undefined if index is out of range', () => {
  const paginator = new Paginator(fakeData, 5);
  const page1 = paginator.page(-1);
  expect(page1).toBeUndefined();
  const page2 = paginator.page(4);
  expect(page2).toBeUndefined();
});

test('paginator.current() returns the current page', () => {
  const paginator = new Paginator(fakeData, 5);
  const current = paginator.current();
  expect(current).toEqual([0, 1, 2, 3, 4]);
});

test('paginator.first() returns the first page', () => {
  const paginator = new Paginator(fakeData, 5);
  const first = paginator.first();
  expect(first).toEqual([0, 1, 2, 3, 4]);
});

test('paginator.last() returns the last page', () => {
  const paginator = new Paginator(fakeData, 5);
  const last = paginator.last();
  expect(last).toEqual([15, 16, 17, 18, 19]);
});

test('paginator.next() returns the next page', () => {
  const paginator = new Paginator(fakeData, 5);
  const next = paginator.next();
  expect(next).toEqual([5, 6, 7, 8, 9]);
});

test('paginator.previous() returns the previous page', () => {
  const paginator = new Paginator(fakeData, 5);
  paginator.next();
  const previous = paginator.previous();
  expect(previous).toEqual([0, 1, 2, 3, 4]);
});

test('paginator.hasNext() returns false', () => {
  const paginator = new Paginator(fakeData, 5);
  paginator.last();
  const hasNext = paginator.hasNext();
  expect(hasNext).toBeFalsy();
});

test('paginator.hasPrevious() returns false', () => {
  const paginator = new Paginator(fakeData, 5);
  const hasPrevious = paginator.hasPrevious();
  expect(hasPrevious).toBeFalsy();
});
