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

function saveReview(review, array) {
  if (!array.includes(review)) {
    array.push(review);
  } else {
    return array;
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length*20
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
