function createLibrary(name, type) {
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

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book);
  } else {
    library.shelves.fiction.push(book);
  }
}

function checkoutBook(library, book, type) {
  for (var i = 0; i < library.shelves[type].length; i++) {
    if (book === library.shelves[type][i].title) {
      library.shelves[type].splice(i,1);
      return `You have now checked out ${book} from the ${library.name}`
    }
  }
      return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
