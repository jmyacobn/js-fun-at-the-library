function shelfBook(book, shelf) {
  if(shelf.length < 3) {
    return shelf.unshift(book);
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      return shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var newTitles = [];
    for (var i = 0; i < shelf.length; i++) {
      newTitles.push(shelf[i].title);
    }
    return newTitles.join(", ");
}

function searchShelf(shelf, book) {
  var includesBook = false;
    for (var i = 0; i < shelf.length; i++) {
      if (shelf[i].title.includes(book)) {
        includesBook = true;
      } else {
        includesBook = false;
      }
    }
  return includesBook;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
