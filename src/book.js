function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character;
}

function saveReview(feedback, reviews) {
  if (!reviews.includes(feedback)) {
    reviews.push(feedback);
  } else {
    return reviews;
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length*20
}

function writeBook(title, character, genre) {
  var books = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
  return books;
}

function editBook (book) {
  book.pageCount = book.pageCount*0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
