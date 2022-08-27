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

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
