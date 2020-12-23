<div align="center">
  <h1><a href="https://www.npmjs.com/package/apaginator">Apaginator</a></h1>
    <img src="https://img.shields.io/npm/v/apaginator?style=flat-square" alt="npm"/> <img src="https://img.shields.io/github/workflow/status/Mesteery/apaginator/Testing?style=flat-square" alt="Github Workflow Status"/>
  <br>
  <strong>A simple utility to paginate arrays.</strong>
</div>
<br>

### Usage :

- Install : `npm i apaginator`
- Creates a new `Paginator` from a given `Array`,
  optionally with a specific number of items per page : `new Paginator(data[, perPage])` - return `Paginator` object :
  - `data` - The array
  - `currentPage` - The current page index
  - `totalPages` - The number of pages
  - `page(index)` - Returns the specified page or `undefined` if the specified index is out of range.
  - `current()` - Returns the current page.
  - `first()` - Returns the first page.
  - `last()` - Returns the last page.
  - `next()` - Returns the next page or `undefined` if there is no next page.
  - `previous()` - Returns the previous page or `undefined` if there is no previous page.
  - `hasNext()` - Checks if there is a next page.
  - `hasPrevious()` - Checks if there is a previous page.

### Examples :

```js
const { Paginator } = require('apaginator');
// create some fake data
const fakeData = Array.from(Array(35).keys());
// create a Paginator object with 10 items per page (the default value)
const paginator = new Paginator(fakeData);

// print the current page (the 1st page)
console.log(paginator.current());
// print the 10th page
console.log(paginator.page(9));

// print the next page (the 11th page)
console.log(paginator.next());
// print the previous page (the 10th page)
console.log(paginator.previous());
```

```ts
import { Paginator } from 'apaginator';
// create some fake data
const fakeData = Array.from(Array(14).keys());
// create a Paginate object with 5 items per page
const paginator = new Paginate(fakeData, 5);

// print the 1st page
console.log(paginator.first());
// print the last page (the 3rd page)
console.log(paginator.last());

// print true
console.log(paginator.hasPrevious());
// print false
console.log(paginator.hasNext());
```
