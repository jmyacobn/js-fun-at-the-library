function createLibrary (name, type) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library;
}

function addBook (library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book);
  } else {
    library.shelves.fiction.push(book);
  }
}


module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
