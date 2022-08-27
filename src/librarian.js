class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patronName, isMorning) {
    if (isMorning) {
      return `Good morning, ${patronName}!`
    } else if (!isMorning) {
      return `Hello, ${patronName}!`
    }
  }

  findBook(book) {
    for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
      if (book === this.library.shelves.fantasy[i].title) {
        this.library.shelves.fantasy.splice(i, 1);
        return `Yes, we have ${book}`;
      }
    }
        return `Sorry, we do not have ${book}`;
    }

  calculateLateFee(daysLate) {
    var lateFee = Math.ceil(daysLate * 0.25)
    return lateFee
  }
}



module.exports = Librarian;
