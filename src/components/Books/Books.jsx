import { useEffect, useState } from "react";
import Book from "../book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data.slice(0, 10)))
    }, [])

    if (books.length < 3) {
        return <p>this not found</p>
    }

    return (
        <div>
            <h2 className='text-4xl font-bold 
            text-center'>Books</h2>
            <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    books.map(book => <Book
                        key={book.bookId}
                        book={book}>

                    </Book>)
                }
            </div>
        </div>
    );
};

export default Books;