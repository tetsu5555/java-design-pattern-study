class BooksIterator {
    constructor(books) {
        if (!(Array.isArray(books))) return;
        this.books = books;
        this.currentIndex = 0;
    }
    hasNext() {
        if (this.currentIndex < this.books.length) {
            return true;
        } else {
            return false;
        }
    }
    current() {
        return this.books[this.currentIndex];
    }
    next() {
        const elm = this.books[this.currentIndex];
        if (!elm) return false;
        this.currentIndex++;
        return elm;
    }
}

class Book {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Bookshelf {
    constructor(books = []) {
        this.books = books;
    }
    iterator() {
        return new BooksIterator(this.books);
    }
    addBook(book) {
        this.books.push(book);
    }
}

bookshelf = new Bookshelf();
bookshelf.addBook(new Book("hoge"));
bookshelf.addBook(new Book("this is book"));
bookshelf.addBook(new Book("fuga"));
const it = bookshelf.iterator();
while (it.hasNext()) {
    console.log(it.next());
}
