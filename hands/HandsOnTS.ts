// 1.Define an interface Book with the following properties:
    /*id (number)
    title (string)
    author (string)
    published (Date)
    available (boolean)*/
    interface Book {
        id: number;
        title: string;
        author: string;
        published: Date;
        available: boolean;
    }
    // Create an array books with the type Book[] and add a few sample books to the array.
    const books: Book[] = [
        {
            id: 1,
            title: "To Kill A Mockingbird",
            author: "Harper Lee",
            published: new Date("1960-07-11"),
            available: true
        },
        {
            id: 2,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            published: new Date("1925-04-10"),
            available: false
        },
        {
            id: 3,
            title: "The Catcher in the Rye",
            author: "E. Michael Mitchell",
            published: new Date("1951-07-16"),
            available: false
        }
    ]
    // 3. Define a function addBook(book: Book): void that takes a Book object as a parameter and adds it to the books array.
    function addBook (book: Book): void {
        books.push(book);
    }
    
    // 4. Define a function findBookById(id: number): Book | undefined that takes a book id as a parameter and returns the book with the given id or undefined if the book is not found.
    function findBookById (id: number): Book | undefined {
        for (let i=0; i < books.length; i++) {
            const book = books[i];
            if (book.id === id) {
                return book;
            } else {
                return ;
            }
        }
    };
    
    // 5. Define a function updateBook(book: Book): boolean that takes a Book object as a parameter, finds the book with the same id in the books array, and updates its properties.
    // The function should return true if the book was updated successfully or false if the book was not found.
    function updateBook(book: Book): boolean {
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === book.id) {
                books[i] = book;
                return true;
            }
        }
        return false;
    }
    
    
    // 6. Define a function removeBook(id: number): boolean that takes a book id as a parameter and removes the book with the given id from the books array.
    // The function should return true if the book was removed successfully or false if the book was not found.
    function removeBook(id: number): boolean {
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                books.splice(i,1);
                return true;
            }
        }
        return false;
    }
    
    // 7. Test your functions by adding, updating, and removing books, and finding books by their id.
    // console.log(books);
    
    // Add a book to the array of books
    addBook({
        id: 4,
        title: "The Grapes of Wrath",
        author: "Elmer Hader",
        published: new Date("1929-04-10"),
        available: true
    });
    
    // Update a book in the array of books
    const updatedBook = findBookById(2)
        if (updatedBook) {
            updatedBook.available = true;
            updateBook(updatedBook);
        }
        console.log("Update book availability to true")
        console.log("");
    
    // Remove the book from the array of books
        removeBook(3);
        console.log("Removed the book from the array of books")
        console.log(books);
        console.log("");
    
    // Find a book by its id
    const findBook= findBookById(1)
    console.log("We have found the following: ");
    console.log(findBook);
    